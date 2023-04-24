
import * as tf from "@tensorflow/tfjs" 

const mapData = (row) => {
  return {
    input: [
      row.xs.capShape,
      row.xs.capSurface,
      row.xs.capColor,
      row.xs.bruises,
      row.xs.odor,
      row.xs.gillAttachment,
      row.xs.gillSpacing,
      row.xs.gillSize,
      row.xs.gillColor,
      row.xs.stalkShape,
      row.xs.stalkRoot,
      row.xs.stalkSurfaceAboveRing,
      row.xs.stalkSurfaceBelowRing,
      row.xs.stalkColorAboveRing,
      row.xs.stalkColorBelowRing,
      row.xs.veilType,
      row.xs.veilColor,
      row.xs.ringNumber,
      row.xs.ringType,
      row.xs.sporePrintColor,
      row.xs.population,
      row.xs.habitat,
    ],
    label: row.ys.class,
  };
};

async function loadData() {
  const csvUrl ="data/mushrooms.csv";
  const csvDataset = tf.data.csv(csvUrl, {
    columnConfigs: { class: { isLabel: true } },
  });
  const rawData = await csvDataset.toArray();

  const data = rawData.map(mapData);
  return data;
}

class DecisionTree {
  constructor() {
    this.root = null;
  }

  fit(X, y) {
    this.root = this._buildTree(X, y);
  }

  predict(X) {
    // Initialize an empty array to store the predicted class labels.
    const yPred = [];

    // Loop through all the input feature vectors.
    for (let i = 0; i < X.length; i++) {
      
      // Start from the root node of the decision tree
      let currentNode = this.root;

      // Traverse down the decision tree until a leaf node (i.e., a node with a class label) is reached.
      while (currentNode.label === null) {
         // Get the value of the feature at the current node for the i-th input feature vector.
        const featureValue = X[i][currentNode.featureIndex];
        
        // If the value of the feature is one of the children of the current node, move down to that child node.
        if (featureValue in currentNode.children) {
          currentNode = currentNode.children[featureValue];
        } else {
           // If the value of the feature is not in the list of children of the current node, break out of the loop.
          break;
        }
      }
      // Add the predicted class label to the array of predicted class labels.
      yPred.push(currentNode.label);
    }
    // Return the array of predicted class labels.
    return yPred;
  }


  // This private method builds a decision tree recursively using the provided training data X and labels y
  // It returns the root node of the tree
  _buildTree(X, y) {
    // If there are no labels, create a leaf node with no feature and no class
    if (y.length === 0) {
      return new Node(null, null);
    }

    // If all labels are the same, create a leaf node with no feature and the common label as the class
    const classes = [...new Set(y)];
    if (classes.length === 1) {
      return new Node(null, classes[0]);
    }

    // Get the number of samples and features in the data
    const nSamples = y.length;
    const nFeatures = X[0].length;
    // Create an array of all feature indices
    const features = new Array(nFeatures).fill().map((_, i) => i);

    // Initialize variables to track the best feature and gain seen so far
    let bestGain = -Infinity;
    let bestFeatureIndex = null;

    // Iterate over all features to find the one that provides the most information gain
    for (let i = 0; i < nFeatures; i++) {
      // Get an array of all unique values of the current feature in the data
      const featureValues = [...new Set(X.map((x) => x[i]))];
      let gain = 0;

      // Calculate the information gain for each possible value of the current feature
      for (let j = 0; j < featureValues.length; j++) {
        // Get the labels of the samples that have the current feature value
        const splitY = y.filter((_, k) => X[k][i] === featureValues[j]);
        // Calculate the proportion of samples that have the current feature value
        const p = splitY.length / nSamples;
        // Calculate the entropy of the labels for the samples that have the current feature value
        gain += -p * this._entropy(splitY);
      }

      // If the information gain for the current feature is better than the previous best, update the variables
      if (gain > bestGain) {
        bestGain = gain;
        bestFeatureIndex = i;
      }
    }

    // Create a new node with the best feature as the splitting criterion
    const rootNode = new Node(bestFeatureIndex, null);
    // Get an array of all unique values of the best feature in the data
    const featureValues = [...new Set(X.map((x) => x[bestFeatureIndex]))];

    // Recursively build a subtree for each possible value of the best feature
    for (let i = 0; i < featureValues.length; i++) {
      // Get the indices of the samples that have the current feature value
      const splitIndices = X.map((x, j) => j).filter(
        (j) => X[j][bestFeatureIndex] === featureValues[i]
      );
      // Create a new data matrix with the current feature removed
      const splitX = splitIndices.map((j) =>
        X[j].filter((_, k) => k !== bestFeatureIndex)
      );
       // Get the labels of the samples that have the current feature value
      const splitY = splitIndices.map((j) => y[j]);
      // Recursively build a subtree using the new data and labels
      const childNode = this._buildTree(splitX, splitY);
      // Add the subtree as a child of the current node
      rootNode.children[featureValues[i]] = childNode;
    }
    //return node
    return rootNode;
  }

  _entropy(y) {
    // Get unique classes in y
    const classes = [...new Set(y)];
    // Get number of samples in y
    const nSamples = y.length;

    // Initialize entropy to 0
    let entropy = 0;

    // Loop over each class
    for (let i = 0; i < classes.length; i++) {
      // Calculate the proportion of samples with this class
      const p = y.filter((c) => c === classes[i]).length / nSamples;
      // Add the entropy contribution of this class
      entropy += -p * Math.log2(p);
    }

     // Return the final entropy
    return entropy;
  }
}

class Node {
  constructor(featureIndex, label) {
    this.featureIndex = featureIndex;
    this.label = label;
    this.children = {};
  }
}

export async function main(yTest) {
      // Create instance of DecisionTree
      const tree = new DecisionTree();

      let Xtrain= [];
      let Ytrain = [];

      let Xtest = [];
     
      

      await loadData()
        .then((data) => {
        
          data.forEach((element) => {
              Xtrain.push(element.input);
              Ytrain.push(element.label);
          });

        
        })
        .catch((err) => {
          console.log(err);
        });
    
      tree.fit(Xtrain , Ytrain);

    // get predictions for each sample
      const yPred = tree.predict([ yTest]);
     
      
  alert(yPred == 'e'?"the mushroom is ediable":"the mushroom is poisonous")
}




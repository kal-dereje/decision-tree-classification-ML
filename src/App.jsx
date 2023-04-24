
import {main} from './tree.js';


function App() {

  function handelClick(){
    let capShape = getValue( document.getElementById("CapShape"));
    let capSurface = getValue(document.getElementById("CapSurface"));
    let capColor = getValue(document.getElementById("CapColor"));
    let bruises = getValue(document.getElementById("Bruises"));
    let odor = getValue(document.getElementById("Odor"));
    let gillAttachment = getValue(document.getElementById("GillAttachment"));
    let gillSpacing = getValue(document.getElementById("GillSpacing"));
    let gillSize = getValue(document.getElementById("GillSize"));
    let gillColor = getValue(document.getElementById("GillColor"));
    let stalkShape = getValue(document.getElementById("StalkShape"));
    let stalkRoot = getValue(document.getElementById("StalkRoot"));
    let stalkSurfaceAboveRing = getValue(document.getElementById("StalkSurfaceAboveRing"));
    let stalkSurfaceBelowRing = getValue(document.getElementById("StalkSurfaceBelowRing"));
    let stalkColorAboveRing = getValue(document.getElementById("StalkColorAboveRing"));
    let stalkColorBelowRing = getValue(document.getElementById("StalkColorBelowRing"));
    let veilType = getValue(document.getElementById("VeilType"));
    let veilColor = getValue(document.getElementById("VeilColor"));
    let ringNumber = getValue(document.getElementById("RingNumber"));
    let ringType = getValue(document.getElementById("RingType"));
    let sporePrintColor = getValue(document.getElementById("SporePrintColor"));
    let population = getValue(document.getElementById("Population"));
    let habitat = getValue(document.getElementById("Habitat"));
    
  
     main([capShape,capSurface , capColor , bruises , odor, gillAttachment, gillSpacing,gillSize, gillColor,stalkShape, stalkRoot, stalkSurfaceAboveRing,stalkSurfaceBelowRing,
    stalkColorAboveRing, stalkColorBelowRing, veilType, veilColor, ringNumber, ringType, sporePrintColor,population,habitat]).then(data=>{
      
    }).catch(err=>alert(err))
   
   
  }


  function getValue(doc){
    return doc.options[doc.selectedIndex].value;
  }
  return (

    <div className="flex flex-col gap-5 items-center pt-28 pb-28">
      <h1 className="font-bold font-serif text-2xl">Mushroom Classification</h1>
    <div className="w-full h-screen gap-32 flex justify-center items-center">
      <div className="flex flex-col w-[25%] gap-1 ">
        <div className="flex gap-1  justify-between">
          <p className="font-bold font-serif">Cap Shape : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="CapShape" id="CapShape">
            <option selected value="b">Bell</option>
            <option value="c">Conical</option>
            <option value="x">Convex</option>
            <option value="f">Flat</option>
            <option value="k">Knobbed</option>
            <option value="s">Sunken</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Cap Surface : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="CapSurface" id="CapSurface">
            <option selected value="f">Fibrous</option>
            <option value="g">Grooves</option>
            <option value="y">Scaly</option>
            <option value="s">Smooth</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Cap Color : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="CapColor" id="CapColor">
            <option selected value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="c">Cinnamon</option>
            <option value="g">Gray</option>
            <option value="r">Green</option>
            <option value="p">Pink</option>
            <option value="u">Purple</option>
            <option value="e">Red</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Bruises : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Bruises" id="Bruises">
            <option selected value="t">Bruises</option>
            <option value="f">No</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Odor : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Odor" id="Odor">
            <option selected value="a">Almond</option>
            <option value="l">Anise</option>
            <option value="c">Creosote</option>
            <option value="y">Fishy</option>
            <option value="f">Foul</option>
            <option value="m">Musty</option>
            <option value="n">None</option>
            <option value="p">Pungent</option>
            <option value="s">Spicy</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Gill Attachment : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="GillAttachment" id="GillAttachment">
            <option selected value="a">Attached</option>
            <option value="d">Descending</option>
            <option value="f">Free</option>
            <option value="n">Notched</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Gill Spacing : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="GillSpacing" id="GillSpacing">
            <option selected value="c">Close</option>
            <option value="w">Crowded</option>
            <option value="d">Distant</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Gill Size : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="GillSize" id="GillSize">
            <option selected value="b">Broad</option>
            <option value="n">Narrow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Gill Color : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="GillColor" id="GillColor">
            <option selected value="k">Black</option>
            <option value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="h">Chocolate</option>
            <option value="g">Gray</option>
            <option value="r">Green</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="u">Purple</option>
            <option value="e">Red</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Shape : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkShape" id="StalkShape">
            <option selected value="e">Enlarging</option>
            <option value="t">Tapering</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Root : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkRoot" id="StalkRoot">
            <option selected value="b">Bulbous</option>
            <option value="c">Club</option>
            <option value="u">Cup</option>
            <option value="e">Equal</option>
            <option value="z">Rhizomorphs</option>
            <option value="r">Rooted</option>
            <option value="?">Missing</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col w-[30%] gap-1">
        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Surface Above Ring : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkSurfaceAboveRing" id="StalkSurfaceAboveRing">
            <option selected value="f">Fibrous</option>
            <option value="y">Scaly</option>
            <option value="k">Silky</option>
            <option value="s">Smooth</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Surface Below Ring : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkSurfaceBelowRing" id="StalkSurfaceBelowRing">
            <option  selected value="f">Fibrous</option>
            <option value="y">Scaly</option>
            <option value="k">Silky</option>
            <option value="s">Smooth</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Color Above Ring : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkColorAboveRing" id="StalkColorAboveRing">
            <option selected value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="c">Cinnamon</option>
            <option value="g">Gray</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="e">Eed</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Stalk Color Below Ring : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="StalkColorBelowRing" id="StalkColorBelowRing">
            <option selected value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="c">Cinnamon</option>
            <option value="g">Gray</option>
            <option value="o">Orange</option>
            <option value="p">Pink</option>
            <option value="e">Eed</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Veil Type : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="VeilType" id="VeilType">
            <option selected value="p">Partial</option>
            <option value="u">Universal</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Veil Color : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="VeilColor" id="VeilColor">
            <option selected value="n">Brown</option>
            <option value="o">Orange</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Ring Number : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="RingNumber" id="RingNumber">
            <option selected value="n">none</option>
            <option value="o">one</option>
            <option value="t">two</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Ring Type : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="RingType" id="RingType">
            <option selected value="c">Cobwebby</option>
            <option value="e">Evanescent</option>
            <option value="f">Flaring</option>
            <option value="l">Large</option>
            <option value="n">None</option>
            <option value="p">Pendant</option>
            <option value="s">Sheathing</option>
            <option value="z">Zone</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Spore Print Color : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="SporePrintColor" id="SporePrintColor">
            <option selected value="k">Black</option>
            <option value="n">Brown</option>
            <option value="b">Buff</option>
            <option value="h">Chocolate</option>
            <option value="r">Green</option>
            <option value="o">Orange</option>
            <option value="u">Purple</option>
            <option value="w">White</option>
            <option value="y">Yellow</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Population : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Population" id="Population">
            <option selected value="a">Abundant</option>
            <option value="c">Clustered</option>
            <option value="n">Numerous</option>
            <option value="s">Scattered</option>
            <option value="v">Several</option>
            <option value="y">Solitary</option>
          </select>
        </div>

        <div className="flex gap-1 justify-between">
          <p className="font-bold font-sans">Habitat : </p>
          <select className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Habitat" id="Habitat">
            <option selected value="g">Grasses</option>
            <option value="l">Leaves</option>
            <option value="m">Meadows</option>
            <option value="p">Paths</option>
            <option value="u">Urban</option>
            <option value="w">Waste</option>
            <option value="d">Woods</option>
          </select>
        </div>
      </div>
    </div>

    <button onClick={handelClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pridict</button>

  </div>
  );
}

export default App;

import "./App.css";
import InputField from "./component/InputField";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-900">
      <div className="w-full p-5 bg-white lg:rounded-md h-screen lg:h-[500px] lg:w-[50%]  ">
        <InputField />
      </div>
    </div>
  );
}

export default App;

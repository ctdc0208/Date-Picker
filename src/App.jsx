import DateField from "./DateField"

function App() {
  return (
    <div className="py-10 md:w-fit flex flex-col justify-center mx-auto">
      <div className="flex flex-row">
        <div className="font-bold text-2xl">
          Date and time
        </div>
        <div className="font-extrabold text-red text-2xl ml-1">
          *
        </div>
      </div>
      <div className="flex flex-row items-center mt-7">
        <img 
            src="../src/assets/check_box.svg"
            className="h-5 w-5 mr-2"
          />
        <div className="font-semibold mr-2">Publish ASAP</div>
        <img 
          src="../src/assets/info.svg"
          className="h-4 w-4"
        />
      </div>
      <div className="text-gray mt-8">
        Publication date:
      </div>
      <DateField />
    </div>
  )
}

export default App

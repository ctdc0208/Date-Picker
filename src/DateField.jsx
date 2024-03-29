import './date.css'
import {useState, useRef} from 'react';
import Calendar from 'react-calendar';

export default function DateField() {
    const timeOptions = [
        {value: '09:00 AM', text: "09:00 AM"},
        {value: '09:30 AM', text: "09:30 AM"},
        {value: '10:00 AM', text: "10:00 AM"},
        {value: '10:30 AM', text: "10:30 AM"},
        {value: '11:00 AM', text: "11:00 AM"},
        {value: '11:30 AM', text: "11:30 AM"},
        {value: '12:00 PM', text: "12:00 PM"},
        {value: '12:30 PM', text: "12:30 PM"},
        {value: '01:00 PM', text: "01:00 PM"},
        {value: '01:30 PM', text: "01:30 PM"},
        {value: '02:00 PM', text: "02:00 PM"},
        {value: '02:30 PM', text: "02:30 PM"},
        {value: '03:00 PM', text: "03:00 PM"},
        {value: '03:30 PM', text: "03:30 PM"},
        {value: '04:00 PM', text: "04:00 PM"},
        {value: '04:30 PM', text: "04:30 PM"},
        {value: '05:00 PM', text: "05:00 PM"},
    ];

    const timezoneOptions = [
        {value: 'EST', text: "EST"},
        {value: 'CST', text: "CST"},
    ];

    const monthNames = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];


    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [calendarValue, calendarValueOnChange] = useState(new Date());
    const [timeValue, timeValueOnChange] = useState(timeOptions[0].value);
    const [timezoneValue, timezoneValueOnChange] = useState(timezoneOptions[0].value);

   

    const close = useRef(null)
    const closeOpenMenus = (e)=>{
        if(isOpen && !close.current?.contains(e.target)){
          setIsOpen(false)
        }
    }

    document.addEventListener('mousedown',closeOpenMenus)

    const month = calendarValue.getMonth()
    const day = calendarValue.getDate()
    const year = calendarValue.getFullYear();
    const getMonthNames = monthNames[month]
    const value = day + '/' + getMonthNames + '/' + year +' ' + timeValue + ' ' + '(' + timezoneValue + ')'

    function handleInputChange() {
        setInputValue(value);
    }

    const handleTimeChange = event => {
        timeValueOnChange(event.target.value);
    };
    const handleTimezoneChange = event => {
        timezoneValueOnChange(event.target.value);
    };
    
    return (
    <>
        <button onClick={() => setIsOpen(!isOpen)}  className="flex flex-row items-center mt-5 w-72 md:w-96 lg:w-128 h-10 border border-solid border-light-gray rounded-lg ring-offset-8 ">
            <img 
            src="../src/assets/calendar.svg"
            className="h-4 w-4 ml-4"
            />
           <div className="input-placeholder">
                <input type="text" defaultValue={""} value={value} onChange={handleInputChange} className='w-52 md:w-64 lg:w-80' required></input>
                <div className="placeholder">
                    Select release date<span className='font-extrabold ml-1'>*</span>
                </div>
            </div>
            <img 
                src="../src/assets/expand.svg"
                className="h-4 w-4 ml-3 md:ml-14 lg:ml-10"
            />
        </button>
        {isOpen && (
            <div 
                className='mt-1'
                ref={close}
            >
                <Calendar 
                    onChange={calendarValueOnChange} 
                    value={calendarValue}
                    formatShortWeekday={(locale, value) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][value.getDay()]}
                    calendarType='islamic'
                    className='w-72 md:w-96 lg:w-128'
                    prevLabel=""
                    nextLabel=""
                />
                
                <div className='border-t mt-2 border-light-gray p-5 md:p-5 space-y-3 md:space-y-0 md:space-x-5 flex flex-col md:flex-row justify-center w-72 md:w-96 lg:w-128'>
                    <div>
                        <div className='font-bold text-sm'>Publication Time</div>
                        <select name='time' id='time' onChange={handleTimeChange} value={timeValue} className='border bottom-1 border-light-gray p-2 mt-2 w-44 rounded-lg text-gray'>
                            {timeOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))};
                        </select>
                    </div>
                    <div>
                        <div className='font-bold text-sm'>Publication Timezone</div>
                        <select name='timezone' id='timezone' onChange={handleTimezoneChange} value={timezoneValue} className='border bottom-1 border-light-gray p-2 mt-2 w-44 rounded-lg text-gray'>
                            {timezoneOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))};
                        </select>
                    </div>
                </div>
            </div>
        )}
    </>
    )
  }
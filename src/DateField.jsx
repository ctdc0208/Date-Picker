import './date.css'
import {useState} from 'react'

export default function DateField() {
    const [isOpen, setIsOpen] = useState(true);
    return (
    <>
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-row items-center mt-5 w-128 h-10 border border-solid border-gray rounded-lg ring-offset-8 ">
            <img 
            src="../src/assets/calendar.svg"
            className="h-4 w-4 ml-4"
            />
           <div className="input-placeholder">
                <input type="text" required></input>
                <div className="placeholder">
                    Select release date<span className='font-extrabold ml-1'>*</span>
                </div>
            </div>
            <img 
                src="../src/assets/expand.svg"
                className="h-4 w-4 ml-28"
                />
        </button>
        {isOpen && (
            <div className='mt-2 border rounded-md'>
                <div className='border-t-2 border-gray p-5 space-x-7 flex flex-row justify-center w-128'>
                    <div>
                        <div className='font-bold text-sm'>Publication Time</div>
                        <select name='time' id='time' className='border bottom-1 border-gray p-2 mt-2 w-44 rounded-lg text-gray'>
                            <option value="09:30 AM">09:30 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="10:30 AM">10:30 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="01:30 PM">01:30 PM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="02:30 PM">02:30 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="03:30 PM">03:30 PM</option>
                            <option value="04:00 PM">04:00 PM</option>
                            <option value="04:30 PM">04:30 PM</option>
                            <option value="05:00 PM">05:00 PM</option>
                        </select>
                    </div>
                    <div>
                        <div className='font-bold text-sm'>Publication Timezone</div>
                        <select name='timezone' id='timezone' className='border bottom-1 border-gray p-2 mt-2 w-44 rounded-lg text-gray'>
                            <option value="EST">EST</option>
                            <option value="CST">CST</option>
                        </select>
                    </div>
                </div>
            </div>
        )}
    </>
    )
  }
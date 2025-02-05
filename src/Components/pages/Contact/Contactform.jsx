import { useState } from "react"

const Contactform = () => {
    const [name, setname] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [goal, setgoal] = useState('');
    const [date, setdate] = useState('');
    const [select, setselect] = useState('');
    const [email, setemail] = useState('');
    const [productdetials, setproductdetials] = useState('')
  

    const submithander = (e) =>{
        e.preventDefault();
        setname(name);
        setcompanyname(companyname);
        setgoal(goal);
        setdate(date);
        setselect(select);
        setemail(email);
        setproductdetials(productdetials);
        setname('');
        setcompanyname('');
        setgoal('');
        setdate('');
        setselect('');
        setemail('');
        setproductdetials('');
        alert('your data has been succefullyy added')
   
    }

  return (
    <div className="Contactform">
        <h1>Fill the form below:</h1>

        <form className="Form" onSubmit={submithander}>
            <h4>my name is <input type="text" required  placeholder="enter your name" value={name}
            onChange={(e)=>{
                setname(e.target.value)
            }}
            />
            
            and I work with<input type="text" required  placeholder="Company name type here"
            value={companyname}
            onChange={(e)=>{
                setcompanyname(e.target.value)
            }}
            
            />

            I’m looking for a partner to help me with <input type="text" required  placeholder="your goal type here"
              value={goal}
              onChange={(e)=>{
                  setgoal(e.target.value)
              }}
            
            />

            With an idea of having that completed<input type="date" required placeholder="enter date"
               value={date}
               onChange={(e)=>{
                   setdate(e.target.value)
               }}
            
            />

<label htmlFor="budget">Select Budget Range:</label>
      <select
        id="budget"
        value={select}
        onChange={(e) => setselect(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="5000">5,000-15,000 USD</option>
        <option value="10000">15,000-25,000 USD</option>
        <option value="30000">25,000-50,000 USD</option>
      </select>
            You can reach me at<input type="email" required placeholder="enter your email"
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
            
            />
            to start the conversation.
Optionally, i’m sharing more:<input type="text" required placeholder="product details type here" 
  value={productdetials}
  onChange={(e)=>{
      setproductdetials(e.target.value)
  }}


/></h4>

    <button>Send inquery</button>

        </form>
      
    </div>
  )
}

export default Contactform

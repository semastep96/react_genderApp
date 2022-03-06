import './App.css'
import './checkGender'
import ReactDOM from 'react-dom'
import checkGender from './checkGender';

function GenderInput(props) {
  return (
    <input type="text" placeholder={props.isWrong ? "Enter correct name" : "Enter name please"} className='gender__input'></input>
  );
}

function Btn(props) {
  return <button className={"btn " + props.class}>{props.text}</button>
}

function Output(props) {
  if (!props.gender) {
    return <div className='gender__output'>Gender: </div>
  }
  return <div className='gender__output'>Gender: {props.gender && (`${props.name} is ${props.gender}`)}</div>
}

function GenderForm(props) {
  return (<form onSubmit={e => {
    e.preventDefault()
    const input = document.querySelector('.gender__input')
    const name = input.value.trim()

    checkGender(name).then(gender => {
      ReactDOM.render(<GenderForm name={name} gender={gender} isWrong={name.length < 3}/>, document.getElementById('root'))
    }).catch(alert)

    e.target.reset()
  }}>
    <GenderInput isWrong={props.isWrong}/>
    <Btn text="Check gender" class="gender__btn"/>
    <Output name={!props.isWrong && props.name} gender={!props.isWrong && props.gender}/>
  </form>);
}

export default GenderForm

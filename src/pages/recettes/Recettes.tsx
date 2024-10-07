import { filtersReducer } from "../../hooks/filtersReducer";
import GridCard from "../../components/gridCard/GridCard";
import { useReducer } from "react";

export default function Recettes() {

  const [filters, dispatch] = useReducer(filtersReducer, {
    goal: [
      {
        value: 0,
        name: 'All',
        checked: true
      },
      {
        value: 1,
        name: 'Weight Loss',
        checked: false
      },
      {
        value: 2,
        name: 'Healthy Eating',
        checked: false
      },
      {
        value: 3,
        name: 'Muscle Gain',
        checked: false
      }
    ],
    cuisine: [
      {
        value: 0,
        name: 'All',
        checked: true
      },
      {
        value: 1,
        name: 'Italian',
        checked: false
      },
      {
        value: 2,
        name: 'Mexican',
        checked: false
      },
      {
        value: 3,
        name: 'Japanese',
        checked: false
      },
      {
        value: 4,
        name: 'American',
        checked: false
      },
      {
        value: 5,
        name: 'Internationnal',
        checked: false
      }
    ],
    allergie: [
      {
        value: 1,
        name: 'Peanut',
        checked: false
      },
      {
        value: 2,
        name: 'Dairy',
        checked: false
      },
      {
        value: 3,
        name: 'Shellfish',
        checked: false
      }
    ],
  })

  return <>
    <h1 className="page--title">Menu</h1>

    <fieldset>
      <legend>Cuisine</legend>

      {filters.cuisine.map(c => (
          <div key={c.name}>
            <input type="radio" id={c.name} name='cuisine' value={c.value} onChange={()=> dispatch({type: 'CUISINE', playload: c})} checked={c.checked} />
            <label htmlFor={c.name}>{c.name}</label>
          </div>
      ))}
    </fieldset> 

    <fieldset>
      <legend>Goal</legend>

      {filters.goal.map(g => (
          <div key={g.name}>
            <input type="radio" id={g.name} name='goal' value={g.value} onChange={()=> dispatch({type: 'GOAL', playload: g})} checked={g.checked} />
            <label htmlFor={g.name}>{g.name}</label>
          </div>
      ))}
    </fieldset> 

    <fieldset>
      <legend>Allergie</legend>

      {filters.allergie.map(al => (
          <div key={al.name}>
            <input type="checkbox" id={al.name} name={al.name} value={al.value} onChange={()=> dispatch({type: 'ALLERGIE', playload: al})} checked={al.checked} />
            <label htmlFor={al.name}>{al.name}</label>
          </div>
      ))}
    </fieldset> 
    
    <GridCard filters={filters}/>
  </>
}
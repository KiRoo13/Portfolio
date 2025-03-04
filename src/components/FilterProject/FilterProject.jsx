import "./FilterProject.css";

function FilterProject({selectValue, setSelectValue}) {


  return (
    <div className="section">
      <div className="conteiner">
        <div className="filter">
          <select
            value={selectValue}
            defaultValue={'Сортировать'}
            onChange={(e)=> setSelectValue(e.target.value)}
          >
            <option disabled>Сортировать</option>
            <option value={'React'}>React</option>
            <option value={'JS'}>JS</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterProject;

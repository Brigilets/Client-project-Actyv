import React from 'react';
import Activity from '../components/Activity';
import Filters from '../components/Filters';
//import ResultCards from '../components/ResultsCards';


function SearchResults() {
  return (
      <div>
      <Filters />
     {/*<ResultCards />*/}
     <Activity/>
   </div>
  );
}

export default SearchResults
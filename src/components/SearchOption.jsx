import React, {useState} from 'react'

const SearchOption = () => {
    const [searchInput, setSearchInput] = useState("");
    const countries = [

        { name: "Belgium", continent: "Europe" },
      ];

      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };


      if (searchInput.length > 0) {
        countries.filter((country) => {
        return country.name.match(searchInput);
    });
    }

    return (
        <div className="text-red-50">
            <div>
                <h1 className='text-center font-bold text-4xl p-6'>Together We Will Triumph</h1> 
                <p className='text-center'>Fast and flexible for you to reach everywhere</p>
            </div>

            <div className='text-center p-5'>
                <p className='text-center p-2'>Search For Start Point</p>
                <input className= "text-center mr-10 bg-gray-300" type="text " placeholder="Start Point" onChange={handleChange} value={searchInput} />
                <button className="bg-green-300 border border-green-500 rounded-md px-2 py-1" type="button">Search </button>
            </div>

            <div className='text-center p-5'>
                <p className='text-center p-2'>Search For Destination Point</p>
                <input className= "text-center mr-10 bg-gray-300" type="text " placeholder="End Point" onChange={handleChange} value={searchInput} />
                <button className="bg-green-300 border border-green-500 rounded-md px-2 py-1" type="button">Search </button>
            </div>
        </div>
    )
}

export default SearchOption
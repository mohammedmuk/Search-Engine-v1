import { useState } from "react";

const Search = () => {
  const [isLoading, setLoading] = useState(false);
  const [loadedData, setLoaded] = useState([]);
  const [searchText, setSearch] = useState('');
  const baseURL = 'https://google-search74.p.rapidapi.com';
  const search = () => {
    if (loadedData.length > 0) setLoaded([])
    if (searchText == ''){
      alert('Please fill the input')
    }
    else{
      setLoading(true)
      fetch(`${baseURL}?query=${searchText}&limit=20&related_keywords=true`, {
        method : 'GET',
        headers : {
            'x-rapidapi-host': 'google-search74.p.rapidapi.com',
            'x-rapidapi-key' : 'd5edc122efmsh3d12eac1264a107p15ae7bjsn5d90479f6198'
        }
      })
      .then(response => {
        if (response.status !== 200){
          window.location.reload()
        }
        else{
          return response.json()
        }
      })
      .then(data => {
        console.log(data);
        setLoaded([data])
        setLoading(false)
      })
    }
  }
  const textChange = (e) =>{
    setSearch(e.target.value)
   }
  return (
    <div className="search mt-10">
      <input type="text" onChange={textChange} placeholder="Type Something" className="w-full sm:w-5/6 py-2 px-2  border border-zinc-800 rounded font-bold text-f"/>
      <button className=" bg-slate-700 text-white p-2 w-full mt-3 sm:w-auto sm:mx-3" onClick={search}>Search</button>
      <div className="response-con mt-12">
        {isLoading ? <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          </div> : null
          }
        {loadedData.length > 0 &&
        <div>
          {loadedData[0].results.length !== 0 ?
          <div>
            {loadedData[0].results.map((item, index) => (
              <a href = {item.url} key={index} className="cursor-pointer block mb-10">
              <div className="dark:text-white w-full break-all max-w-full">
                {item.url}
              </div>
                <div className="title text-2xl text-blue-700 dark:text-sky-500">
                  {item.title}
                </div>
                <p className="dark:text-white">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
          : <div className="not-found dark:text-white">Not Found</div>}
        </div>
        }
      </div>
    </div>
  )
}

export default Search
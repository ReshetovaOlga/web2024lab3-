
const searchResult = document.querySelector('.cart .search-result')

const searchBlock = document.querySelector('.cart input')
searchBlock.addEventListener('keyup',(event)=>{
    if(searchBlock.value.length > 3){
        searchResult.classList.remove('hidden')
    }
        else {
        searchResult.classList.add('hidden');
    }
})
export default searchBlock
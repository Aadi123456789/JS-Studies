function getStringlist(arrays){
        var news= arrays.filter(c=>((typeof c)=="string"));
        return news
}
    let arrays=["aa",1,"bcd",-1,"xyz"];
    console.log(getStringlist(arrays));
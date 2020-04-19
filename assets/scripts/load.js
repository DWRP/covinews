if(window.location.hash.replace("#","") === ""){
    window.location.hash = '#home'
}

if(window.location.hash !== '#home'){
    load_page(window.location.hash.replace("#",""));
}

function load_page(page){
    console.log(window.location.host);
    window.location.hash = `#${page}`;
    document.querySelector("body > div > main > iframe").src = `./views/${page}/index.html`;
    bts = ['home','about','contact','more']

    bts.map((item,index)=>{
        if (item === page){
            document.querySelector(`body > div > header > nav > ul > li:nth-child(${index+1}) > button`).className = 'navbar_item-link selected';
        }else{
            document.querySelector(`body > div > header > nav > ul > li:nth-child(${index+1}) > button`).className = 'navbar_item-link';
        }
    })
    
}
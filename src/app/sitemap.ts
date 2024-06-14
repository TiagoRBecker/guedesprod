const SiteMap = () => {
     const date = new Date()
     const dateFormated = date.toLocaleString('pt-br')
    return [
        {
            url:"https://www.documentosparaharmonizacao.com.br/",
            lastModified:new Date()
        },
        {
            url:"https://www.documentosparaharmonizacao.com.br/categories",
            lastModified:new Date()
        },
        {
            url:"https://www.documentosparaharmonizacao.com.br/courses",
            lastModified:new Date()
        },
        {
            url:"https://www.documentosparaharmonizacao.com.br/consultancy",
            lastModified:new Date()
        },
        {
            url:"https://www.documentosparaharmonizacao.com.br/contact",
            lastModified:new Date()
        },
        {
            url:"https://www.documentosparaharmonizacao.com.br/privacy",
            lastModified: new Date()
        }
    ]

      
}
 
export default SiteMap;
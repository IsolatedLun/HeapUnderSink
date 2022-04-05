const DisplayOrLoad = ({ element, data } : { element: JSX.Element, data: any}) => {
    
        if(data)
            return element
        else
            return <>bruh</>

}

export default DisplayOrLoad
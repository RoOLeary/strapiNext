import { useState } from 'react'; 

export default function Tabs(data) {
    
    const [visibleTab, setVisibleTab] = useState(0);

    const listTitles = data.data.tabs.map((item, i) => {
        const itemIndex = i; 
        return(
            <li key={i} onClick={() => setVisibleTab(itemIndex)} className={visibleTab === itemIndex ? "tab-title tab-title--active" : "tab-title"}>{item.tab_title}</li>
        );
    })       
                
    const listContent = data.data.tabs.map((item, i) => {
     const itemIndex = i; 
        return(
            <p key={i} style={visibleTab === itemIndex ? {} : {display: 'none'}}>{item.tab_content}</p>
        );
    })
  
    return(
        <div className="tabs">
            <ul className="tabs-titles">
            {listTitles}
            </ul>
            <div className="tab-content">
            {listContent}
            </div>
        </div>
    );
}
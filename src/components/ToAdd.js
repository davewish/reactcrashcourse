import React,{Component} from 'react';

class  ToAdd extends Component{
    state={
        title:''
    }
    onSubmit =(e)=>{
     e.preventDefault();
     this.props.addto( this.state.title)
     this.setState({
         title:''
     })
    }

    

 onchange=(e)=>{
     this.setState({title:e.target.value

     })
 }

    render(){
        return (
            <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                type="text" 
                name="title"
                 
                style={{flex:'10' ,padding:'10px'}} 
                placeholder="add Item ...."
                value={this.state.title}
                onChange={this.onchange}
                />

                
                <input type="submit" 
                value="Submit"
                    style={{flex:'1'}}
                    className="btn"/>


                

            </form>


        )
    }

}
export default ToAdd;

import React, { Component } from 'react'

export class FormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            query: '',
            TimeToReach: ''
        }
    }

    onChangeEmail = (event) =>
    {   
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        });
    }

        onChangeQuery = (event) => {
            this.setState({
                query: event.target.value
            });
        }

        onChangeTimeToReach = (event) => {
            this.setState({
                TimeToReach: event.target.value
            });
        }

        onSubmitEnquery = (event) =>{

            //it will prevent the default refresh behaviour of the form
            event.preventDefault();
            console.log("Form Submitted")
            console.log(`Email:${this.state.email}, Query:${this.state.query},TTR: ${this.state.TimeToReach}`)
        }

        componentDidMount(){

            console.log("componentDidMount Called")
            this.setState({
                TimeToReach: 'evening'
            })
        }
    render() {
        return (
            <div>
                Enquiry Form
                <form onSubmit={this.onSubmitEnquery}>
                    <div>
                    <label>Email</label>
                    <input type="email"
                        value = {this.state.email}
                        onChange = {this.onChangeEmail}
                    />
                    </div>

                    <div>
                        <label>Query</label>
                        <textarea value={this.query} onChangeQuery= {this.onChangeQuery}></textarea>

                    </div>

                    <div>
                        <label>Preferrred Time To Reach</label>
                        <select value={this.TimeToReach} onChange={this.onChangeTimeToReach}>
                            <option value = "morning">Morning</option>
                            <option value = "afternoon">Afternoon</option>
                            <option value = "evening">Evening</option>
                        </select>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        
            

        )
    }
}

export default FormComponent
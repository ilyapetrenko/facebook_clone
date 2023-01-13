import React from 'react'
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    //setState асинхронен
    activateEditMode = () => {
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    //с помощью функции ниже мы в онченж записываем из юай в локальный стейт значение статуса
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    //внизу байнд потому что я беру свой метод из класса и отдаю кому-то другому (в этом случае спану)
    // что бы избавиться от биндов поменял активейдэдит и деактивейт на стрелочные функции вместо методов
    render() {
        return(
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={ this.activateEditMode }>{this.props.status || 'No status'}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
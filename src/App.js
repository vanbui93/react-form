import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      txtName: '',
      txtPassword: '',
      txtDescription: '',
      selectGender: '',
      ckLang:'en',
      ckStatus: true
    }
  }
  
  handleChange = (e) => {
    console.log(e.target.value);
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked: target.value;
    this.setState({
      [name]: value
    })
    
  }
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="card text-left">
          <div className="card-header text-white bg-warning">Header</div>
          <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>User name</label>
                <input type="text" 
                  className="form-control" 
                  name="txtName"
                  onChange={ this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Pass word</label>
                <input type="text" 
                  className="form-control" 
                  name="txtPassword"
                  onChange={ this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mô tả</label>
                <textarea type="text" 
                  className="form-control" 
                  name="txtDescription"
                  onChange={ this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <select 
                  className="form-control" 
                  name="selectGender"
                  onChange={ this.handleChange}
                  defaultValue={1}
                >
                  <option value={0}>Nữ</option>
                  <option value={1} >Nam</option>
                </select>
              </div>
              <div className="form-check form-check-inline mb-3">
                <label className="form-check-label mr-4">
                  <input type="radio" className="form-check-input" 
                  name="ckLang" 
                  onChange={ this.handleChange}
                  value="en" checked={this.state.ckLang ==='en'}/>
                  Tiếng anh
                </label>
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" 
                  name="ckLang" 
                  onChange={ this.handleChange}
                  value="vi"  checked={this.state.ckLang ==='vi'}/>
                  Tiếng Việt
                </label>
              </div>
              <div className="form-check mb-4">
                <label className="form-check-label">
                  <input type="checkbox" 
                  className="form-check-input" 
                  name="ckStatus" 
                  value={true} 
                  onChange={ this.handleChange}
                  checked={ this.state.ckStatus }
               />
                  Trạng thái
                </label>
              </div>
              <div>
                <button type="submit" className="btn btn-primary mr-3">Lưu lại</button>
                <button type="reset" className="btn btn-warning">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
import React from "react";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      judul: "Yunius ",
      namabahwa: "Aplikasi Yang Berisi Panduan Tentang Parenting di Lingkungan Keluarga"
    };
  }

  render() {
    return (
      <div>
        <h2 className="Text">{this.state.judul}</h2>
        <p className="p-text">{this.state.namabahwa}</p>
      </div>
    );
  }
}
export default Home;
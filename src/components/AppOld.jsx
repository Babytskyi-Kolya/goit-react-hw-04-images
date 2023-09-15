import React from "react";
import { SearchBar } from "./search-bar/SearchBar";
import { ImageGallery } from "./image-gallery/ImageGallery";
import { Button } from "./button/LoadMore";
import { Modal } from "./modal/Modal";
import { fetchImages } from "api";
import {Body} from './App.styled';



export class App extends React.Component{
    //  state = {
    //     query: '',
    //     images: [],
    //     page: 1,
    //     showModal: false,
    //     imageForModal: {},
    //     totalHits: 0,
    //  }

    

    //  changeQuery = (newQuery) => {
    //     this.setState({
    //       query: `${Date.now()}/${newQuery}`,
    //       images: [],
    //       page: 1,
    //       isLoading: false,
    //     })
    //  };

    //  handleLoadMore = () => {
    //    this.setState(prevState => ({page: prevState.page + 1}))
    //  }

    //  handleOpenModal = (img) => {
    //       this.setState({
    //         showModal: true,
    //         imageForModal: img,
    //       })
    //  }
     
     

    //  handleCloseModal = () => {
    //      this.setState({
    //       showModal: false,

    //         });
    //       };
  
     

   
     
     async componentDidUpdate (prevProps, prevState) {
       
      if(prevState.query !== this.state.query || prevState.page !== this.state.page){
        const item = this.state.query.split("/");
        const string = item[1];
        await fetchImages(string, this.state.page)
        .then()
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoading: false,
            totalHits: data.totalHits,
           
          }));
        })
        .catch(error => {
          console.error('Error loading images:', error);
          this.setState({ isLoading: false });
        });
        
      }
     }

     render() {

      const {images, showModal, imageForModal, totalHits} = this.state;


    //   return(
    //    <Body>
    //       <SearchBar
    //        onSubmit={this.changeQuery}
    //       />
    //       <ImageGallery
    //          images={images}
    //          openModal={this.handleOpenModal}
            
    //       />

    //       {images.length < 0 || images.length + 1 <= totalHits ? <Button
    //       onClick={this.handleLoadMore}
    //       /> : ''}
 
    //       {showModal && 
    //       <Modal 
    //       bigUrl={imageForModal}
    //       closeModal={this.handleCloseModal}/>}
    //    </Body>

    //   )
    //  }

}






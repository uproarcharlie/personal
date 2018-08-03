import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

// Styled
import  { InfoButtonContainer, InfoButton, SectionTitle } from '../theme/buttonAndModalStyle.js';
import './custom-animation.css';

  class Interests extends Component {

  state = {
    openFundraisingModal: false,
      openDDModal: false,
        openGamingModal: false,
  };

  onOpenFundraisingModal = () => {
    this.setState({ openFundraisingModal: true });
  };

  onCloseFundraisingModal = () => {
    this.setState({ openFundraisingModal: false });
  };

  onOpenDDModal = () => {
    this.setState({ openDDModal: true });
  };

  onCloseDDModal = () => {
    this.setState({ openDDModal: false });
  };

  onOpenGamingModal = () => {
    this.setState({ openGamingModal: true });
  };

  onCloseGamingModal = () => {
    this.setState({ openGamingModal: false });
  };

  render() {
    const { openFundraisingModal, openDDModal, openGamingModal } = this.state;
    return (
        <div>
        <SectionTitle>I Can Help With:</SectionTitle>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenFundraisingModal} target="_blank">
                  Fundraising
              </InfoButton>
              </InfoButtonContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenDDModal} target="_blank">
                  Due Dilligence
              </InfoButton>
              </InfoButtonContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenGamingModal} target="_blank">
                  Gaming
              </InfoButton>
              </InfoButtonContainer>
          </div>  
        </div>
        
        <div>
          <Modal
          open={openFundraisingModal}
          onClose={this.onCloseFundraisingModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000} >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>

        <Modal
          open={openDDModal}
          onClose={this.onCloseDDModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000} >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>

        <Modal
          open={openGamingModal}
          onClose={this.onCloseGamingModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000} >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
      </div>
    );
  }
}

export default Interests;
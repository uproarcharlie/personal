import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

// Styled - The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.
import  { InfoButtonContainer, InfoButton, SectionTitle, InfoTitle, ModalHeaderImage, ModalTitle   } from '../theme/buttonAndModalStyle.js';
import './custom-animation.css';

  class Focus extends Component {

  state = {
    openProductDevModal: false,
    openGrowthHackingModal: false,
      openMVPModal: false,
      openGamifyModal: false,
        openGamingModal: false,
        openEsportsModal: false,
  };

  onOpenProductDevModal = () => {
    this.setState({ openProductDevModal: true });
  };

  onCloseProductDevModal = () => {
    this.setState({ openProductDevModal: false });
  };

  onOpenGrowthHackingModal = () => {
    this.setState({ openGrowthHackingModal: true });
  };

  onCloseGrowthHackingModal = () => {
    this.setState({ openGrowthHackingModal: false });
  };

  onOpenMVPModal = () => {
    this.setState({ openMVPModal: true });
  };

  onCloseMVPModal = () => {
    this.setState({ openMVPModal: false });
  };

  onOpenGamifyModal = () => {
    this.setState({ openGamifyModal: true });
  };

  onCloseGamifyModal = () => {
    this.setState({ openGamifyModal: false });
  };

  onOpenGamingModal = () => {
    this.setState({ openGamingModal: true });
  };

  onCloseGamingModal = () => {
    this.setState({ openGamingModal: false });
  };

  onOpenEsportsModal = () => {
    this.setState({ openEsportsModal: true });
  };

  onCloseEsportsModal = () => {
    this.setState({ openEsportsModal: false });
  };

  render() {
    const { openProductDevModal,  openGrowthHackingModal, openMVPModal, openGamifyModal, openGamingModal, openEsportsModal } = this.state;
    return (
        <div>
        <SectionTitle>I Can Help With:</SectionTitle>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenProductDevModal} target="_blank">
                  Product Development
              </InfoButton>
              </InfoButtonContainer>
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenGrowthHackingModal} target="_blank">
                  Growth Hacking
              </InfoButton>
              </InfoButtonContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenMVPModal} target="_blank">
                  MVP Development
              </InfoButton>
              </InfoButtonContainer>
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenGamifyModal} target="_blank">
                  Gamification
                  </InfoButton>
              </InfoButtonContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenGamingModal} target="_blank">
                  Gaming
              </InfoButton>
              </InfoButtonContainer>
              <InfoButtonContainer className='col-sm-12'>
              <InfoButton onClick={this.onOpenEsportsModal} target="_blank">
                  eSports
              </InfoButton>
              </InfoButtonContainer>
          </div>  
        </div>

        <div>
        <Modal 
          className='modal-style'
          open={openProductDevModal}
          onClose={this.onCloseProductDevModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            modal: 'modal-style',
            
          }}
          animationDuration={1000} >
          <ModalHeaderImage src={require('../assets/product-development.png')}></ModalHeaderImage>
          <ModalTitle>Product Development</ModalTitle>
          <p>
            I got into the industry as a business guy, but at heart I am a product guy, ever since I started creating jewelry and gaming content I have most enjoyed creating something that is enjoyed by others.
            Now I don't create physical products, instead I like to help build software and tech products that are used by thousands of people every day.
          </p>
        </Modal>

        <Modal
          open={openGrowthHackingModal}
          onClose={this.onCloseGrowthHackingModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            modal: 'modal-style',
          }}
          animationDuration={1000} >
          <ModalHeaderImage src={require('../assets/growth-hacking.png')}></ModalHeaderImage>
          <ModalTitle>Growth Hacking</ModalTitle>
          <p>
            From jewelry e-commerce to gaming platforms, its always the same thing, we need to get eyeballs to see what we are offering and I have become an expert at getting
            customers as efficiently as possible as all the products I have been involved in have had lean marketing budgets. With Uproar we grew to over 300,000 users with 75% coming from referral features and influencer/community driven marketing.
            I can help you create features and strategies to push the needle when it comes to growth without using lazy marketing tactics that the majority of the market use that don't yield good results.
          </p>
        </Modal>

        <Modal
          open={openMVPModal}
          onClose={this.onCloseMVPModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            modal: 'modal-style',
          }}
          animationDuration={1000} >
          <ModalHeaderImage src={require('../assets/mvp-development.jpeg')}></ModalHeaderImage>
          <ModalTitle>MVP Development</ModalTitle>
          <p>
            Over the last 4 years I have enjoyed getting many MVP's to market as quick as possible. A version of Gamer 4 Good we got together in 36 hours, Rhinomint in around 14 days and Uproar which we got to market in 30 days. Getting 
            a product to market is the initial step you need to take to see if an idea has the potential of becoming a business. In the early days you need to be scrappy and make changes fast, let me help you get an MVP to market ASAP.
          </p>
        </Modal>

        <Modal
          open={openGamifyModal}
          onClose={this.onCloseGamifyModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            modal: 'modal-style',
          }}
          animationDuration={1000} >
          <ModalHeaderImage src={require('../assets/gamification.jpg')}></ModalHeaderImage>
          <ModalTitle>Gamification</ModalTitle>
          <p>
            Gamification is about pulling a user or customers leavers to help improve the experience and create a narrative around a product or anything really.
            We know that people need a purpose and direction and incorporating a gamified experience can take your engagement to the next level.
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
            modal: 'modal-style',
          }}
          
          animationDuration={1000} >
          <ModalHeaderImage src={require('../assets/gaming.jpg')}></ModalHeaderImage>
          <ModalTitle>Gaming</ModalTitle>
          <p>
            My love for gaming comes from the belief that it should be used as a tool to improve your life and to stomp out the stigma that gaming is a waste of time.
            Scientifically we know that playing video games makes your brain work, and your brain is a muscle. I tend to enjoy and get involved with skill based, player vs player
            games that involve a high skill cap or teamwork.
          </p>
        </Modal>

        <Modal
          open={openEsportsModal}
          onClose={this.onCloseEsportsModal}
          center
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
            modal: 'modal-style',
          }}
          animationDuration={1000}>
          <ModalHeaderImage src={require('../assets/all_star_league_legends_paris.jpg')}></ModalHeaderImage>
          <ModalTitle>eSports</ModalTitle>
          <p>
            eSports shaped the early growth that I experienced when it came to leadership and competition. I got into eSports in 2004 and still
            participate within the industry to this day. The games I played at a professional level were: World of Warcraft, Rift, Call of Duty, Halo, Heroes of The Storm,
            and Gears of War. After I got finished playing I have commentated, oporated eSport teams, organised tournaments and been CEO of Uproar.gg one of the biggest
            eSport platforms in the world.
          </p>
        </Modal>
      </div>
    </div>
    );
  }
}

export default Focus;
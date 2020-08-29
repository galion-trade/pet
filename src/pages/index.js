import React, {Component} from 'react';
import '../App.css';
import Header from "../components/Header";

export default class Index extends Component{

    render() {

        return (
            <>
                <Header headerPosition="main-header" colorLogoText="main-header__logo-text" colorMenuLink="main-header__menu-link"/>

                <div class="mainblock">
                    <div class="container">
                        <div class="mainblock__content">
                            <h1 class="mainblock__title">
                                Не только людям нужен дом ...</h1>
                            <div class="mainblock__text">Бездомные собаки и кошки не преступники, а несчастные живые существа, оказавшиеся в столь тяжелой ситуации по вине человека. В наших силах помочь им, спасти, приютить, накормить, защитить!</div>
                            <button class="btn btn_bg_beige_color" >Выбрать себе друга </button>
                        </div></div></div>



                <div class="main-about">
                    <div class="container">

                        <div class="main-about__body ">


                            <div class="page-block flex-row-column">
                                <div class="page-block__column">
                                    <img src="/img/pets.png" alt="" class="page-block__img"/>
                                </div>
                                <div class="page-block__column">
                                    <h2 class="title page-block__title">About the shelter <br />“Cozy House”</h2>

                                    <p class="page-block__text page-block__top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. </p>
                                    <p class="page-block__text">Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis
                                        ultrices pharetra. Morbi tempus at ante sit amet tristique.
                                        Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim lorem. Sed at ligula et sem mattis gravida ac vel erat.</p>
                                </div>



                            </div>






                        </div></div>
                </div>


                <div class="catalog">
                    <div class="container">
                        <div class="catalog__body">
                            <h2 class="title">Our friends who<br />
                                are looking for a house</h2>
                            <div class="catalog__inner">

                                <div class="carousel flex-row">
                                    <button class="btn carousel__btn">&larr;</button>
                                    <ul class="catalog-list flex-row ">
                                        <li class="catalog-list__item">
                                            <div class="catalog-list__inner-block">
                                                <img src="img/animals/charly.jpg" alt="" class="catalog-list__img"/>
                                                    <div class="catalog-list__title">Katrine</div>
                                                    <button class="btn">Смотреть</button>
                                            </div>
                                        </li>

                                        <li class="catalog-list__item">
                                            <div class="catalog-list__inner-block">
                                                <img src="img/animals/charly.jpg" alt="" class="catalog-list__img"/>
                                                    <div class="catalog-list__title">Katrine</div>
                                                    <button class="btn">Смотреть</button>
                                            </div>
                                        </li>

                                        <li class="catalog-list__item">
                                            <div class="catalog-list__inner-block">
                                                <img src="img/animals/charly.jpg" alt="" class="catalog-list__img"/>
                                                    <div class="catalog-list__title">Katrine</div>
                                                    <button class="btn">Смотреть</button>
                                            </div>
                                        </li>
                                    </ul>

                                    <button class="btn carousel__btn">&rarr;</button>
                                </div>


                            </div>


                            <button class="btn btn_bg_beige_color" >
                                Познакомиться со всеми </button>
                        </div>
                    </div>
                </div>





                <div class="main-help">
                    <div class="main-help__body">
                        <div class="title">Than you can help<br /> our shelter</div>

                        <div class="main-help__top">
                            <div class="container">
                                <ul class="help-list flex-wrap">
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_1.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Pet food</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_2.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Transportation</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_3.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Toys</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_4.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Bowls and cups</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_5.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Shampoos</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_6.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Vitamins</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_7.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Medicines</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_8.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Collars / leashes</div>
                                    </li>
                                    <li class="help-list__item">
                                        <img src="/img/help/help-ico_9.png" alt="" class="help-list__img"/>
                                            <div class="help-list__title">Sleeping area</div>
                                    </li>

                                </ul>
                            </div>
                        </div>








                        <div class="main-help__bottom">







                            <div class="container">

                                <div class="page-block flex-row-column">

                                    <div class="page-block__column">
                                        <img src="/img/dog_donation.png" alt="" class="page-block__img"/>
                                    </div>


                                    <div class="page-block__column">
                                        <h2 class="title page-block__title">In addition, you <br />can make a donation</h2>

                                        <div class="page-block__box-pay">

                                            <p class="page-block__text page-block__text_font_family_garamond">Name of the bank / Type of bank account</p>

                                            <iframe width="220" height="100" src="https://widget.qiwi.com/widgets/big-button-220x100?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPq1VEMZZWaJFJuuioyZwC16L4DhksTSXNxi4xT8dwMFyLmurT7tWvodK2QHeXwvC22J9fCULpXeJQBhqUCbT3TUe6UnXHVNLbLYsen7Rd2" allowtransparency="true" scrolling="no" frameborder="0"></iframe>
                                        </div>


                                        <p class="page-block__text page-block__text_font_style_italic page-block__text_font_size_small
page-block__text_color_gray
	">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
                                            ac diam. </p>

                                    </div>

                                </div></div>
                        </div>

                    </div>
                </div>























            </>
        )
    }
}
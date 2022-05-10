<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./css/main.min.css">
</head>
<body>
    <!-- header -->
    <header class="header">
        <div class="header__container">
            <!-- navigation -->
            <a class="logo header__logo" href="./index.html"> Web<span class="header-logo__accent">Studio</span></a>
            <button class="menu-button" aria-expanded="true"  type="button" data-menu-button>
                <svg width="40" height="40" aria-label="Переключатель мобильного меню">
                    <use class="menu-button__icon-menu menu-button__icon" href="./img-vect/sprite.svg#menu-burger"></use>
                    <use class="menu-button__icon-close menu-button__icon" href="./img-vect/sprite.svg#close-burger"></use>
                </svg>
            </button>
            <div class="menu-container" data-menu>
                <nav class="header-nav">
                    <ul class="header-nav__list">
                        <li class="header-nav__item">
                            <a class="header-nav__link header-nav__link--current" href="./index.html">Студия</a>
                        </li>
                        <li class="header-nav__item">
                            <a class="header-nav__link " href="./portfolio.html">Портфолио</a>
                        </li>
                        <li class="header-nav__item">
                            <a class="header-nav__link " href="">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <!-- contacts -->
                <ul class="header-contact">
                    <li class="header-contact__item">
                        <a class="header-contact__link header-contact__link--font-size" href="mailto:info@devstudio.com">
                            <svg class="header-contact__icon" width="16px" height="12px">
                                <use href="./img-vect/sprite.svg#icon-envelope"></use>
                            </svg>
                            info@devstudio.com
                        </a>
                    </li>
                    <li class="header-contact__item">
                        <a class="header-contact__link " href="tel:+380961111111">
                            <svg class="header-contact__icon" width="10px" height="16px">
                                <use href="./img-vect/sprite.svg#icon-smartphone"></use>
                            </svg>
                            +38 096 111 11 11
                        </a>
                    </li>
                </ul>
                <ul class="social-list">
                    <li >
                         <a class="social-list__link social-list__link--separation " href=" ">Instagram </a> </li>
                    <li >
                         <a class="social-list__link social-list__link--separation " href=" "> Twitter</a> </li>
                    <li >
                         <a class="social-list__link social-list__link--separation " href=" ">Facebook </a> </li>
                    <li >
                         <a class="social-list__link " href=" "> LinkedIn</a> </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- main_content -->
    <main>
        <!-- hero_section -->
        <section class="hero">
            <div class="">
                <h1 class="hero__title ">Эффективные решения для вашего бизнеса</h1>
                <button data-modal-open class="button button__order" type="button">Заказать услугу</button>
            </div>
        </section>
        <!-- our_features -->
        <section class="section ">
            <div class="container">
                <h2 class="section__title section__title--visually-hidden">Наши особенности</h2>
                <ul class="features">
                    <li class="features__item ">
                        <div class="features__block">
                            <svg class="features__icon">
                                <use href="./img-vect/sprite.svg#icon-antenna">
                                </use>
                            </svg>
                        </div>
                        <h3 class="features__title">Внимание к деталям</h3>
                        <p class="features__text">Идейные соображения, а также начало повседневной работы по формированию
                            позиции.</p>
                    </li>
                    <li class="features__item ">
                        <div class="features__block">
                            <svg class="features__icon">
                                <use href="./img-vect/sprite.svg#icon-clock">
                                </use>
                            </svg>
                        </div>
                        <h3 class="features__title">Пунктуальность</h3>
                        <p class="features__text">Задача организации, в особенности же рамки и место обучения кадров
                            влечет за собой.</p>
                    </li>
                    <li class="features__item ">
                        <div class="features__block">
                            <svg class="features__icon">
                                <use href="./img-vect/sprite.svg#icon-diagram">
                                </use>
                            </svg>
                        </div>
                        <h3 class="features__title">Планирование</h3>
                        <p class="features__text">Равным образом консультация с широким активом в значительной степени
                            обуславливает.</p>
                    </li>
                    <li class="features__item ">
                        <div class="features__block">
                            <svg class="features__icon">
                                <use href="./img-vect/sprite.svg#icon-astronaut">
                                </use>
                            </svg>
                        </div>
                        <h3 class="features__title">Современные технологии</h3>
                        <p class="features__text">Значимость этих проблем настолько очевидна, что реализация плановых
                            заданий.</p>
                    </li>
                </ul>
            </div>
        </section>
<!-- our_actions -->
        <section class="section section--no-padding-top section--visually-hidden">
            <div class="container">
                <h2 class="section__title">Чем мы занимаемся</h2>
                <ul class="actions">
                    <li class="actions__item"><img src="./img-rast/action1.jpg" alt="Планшет" width="370">
                        <div class="actions__block">
                            <p class="actions__description">Десктопные приложения</p>
                        </div>
                    </li>
                    <li class="actions__item"><img src="./img-rast/action2.jpg" alt="Планшет" width="370">
                        <div class="actions__block">
                            <p class="actions__description">Мобильные приложения</p>
                        </div>
                    </li>
                    <li class="actions__item"><img src="./img-rast/action3.jpg" alt="Планшет" width="370">
                        <div class="actions__block">
                            <p class="actions__description">Дизайнерские решения</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
<!-- our_team -->
        <section class="section section--team-background">
            <div class="container">
                <h2 class="section__title"> Наша команда</h2>
                <ul class="team">
                    <li class="team__item">
                        <picture>
                            <source srcset="./img-rast/team/team1-270.jpg 1x, ./img-rast/team/team1-270@2x.jpg 2x" media="(min-width: 1200px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team1-354.jpg 1x, ./img-rast/team/team1-354@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team1-450.jpg 1x, ./img-rast/team/team1-450@2x.jpg 2x" media="(max-width: 767px)"  type="image/jpeg" />
                            <img src="./img-rast/team/team1-270.jpg" 
                            alt="Игорь Демьяненко" />
                        </picture>
                        <div class="team__detail">
                            <h3 class="team__title">Игорь Демьяненко</h3>
                            <p class="team__text">Product Designer</p>
                        <ul class="social">
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-instagram"></use> 
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-twitter"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-linkedin"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                        </div>
                    </li>
                    <li class="team__item">
                        <picture>
                            <source srcset="./img-rast/team/team2-270.jpg 1x, ./img-rast/team/team2-270@2x.jpg 2x" media="(min-width: 1200px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team2-354.jpg 1x, ./img-rast/team/team2-354@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team2-450.jpg 1x, ./img-rast/team/team2-450@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />
                            <img src="./img-rast/team/team2-270.jpg" alt="Ольга Репина" />
                        </picture>
                        <div class="team__detail">
                            <h3 class="team__title">Ольга Репина</h3>
                            <p class="team__text">Frontend Developer</p>
                        <ul class="social">
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-instagram"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-twitter"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-linkedin"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                        </div>
                    </li>
                    <li class="team__item">
                        <picture>
                            <source srcset="./img-rast/team/team3-270.jpg 1x, ./img-rast/team/team3-270@2x.jpg 2x" media="(min-width: 1200px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team3-354.jpg 1x, ./img-rast/team/team3-354@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team3-450.jpg 1x, ./img-rast/team/team3-450@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />
                            <img src="./img-rast/team/team3-270.jpg" alt="Николай Тарасов" />
                        </picture>
                        <div class="team__detail">
                            <h3 class="team__title">Николай Тарасов</h3>
                            <p class="team__text">Marketing</p>
                        <ul class="social">
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-instagram"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-twitter"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-linkedin"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                        </div>
                    </li>
                    <li class="team__item">
                        <picture>
                            <source srcset="./img-rast/team/team4-270.jpg 1x, ./img-rast/team/team4-270@2x.jpg 2x" media="(min-width: 1200px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team4-354.jpg 1x, ./img-rast/team/team4-354@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />
                            <source srcset="./img-rast/team/team4-450.jpg 1x, ./img-rast/team/team4-450@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />
                            <img src="./img-rast/team/team4-270.jpg" alt="Михаил Ермаков" />
                        </picture>
                        <div class="team__detail">
                            <h3 class="team__title">Михаил Ермаков</h3>
                            <p class="team__text">UI Designer</p>
                        <ul class="social">
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-instagram"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-twitter"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-facebook"></use>
                                    </svg>
                                </a>
                            </li>
                            <li class="social_item">
                                <a class="social__link" href="">
                                    <svg width="20" height="20">
                                        <use href="./img-vect/sprite.svg#icon-linkedin"></use>
                                    </svg>
                                </a>
                            </li>

                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

<!-- Our clients -->

        <section class="section">
            <div class="container ">
                <h2 class="section__title">Постоянные клиенты</h2>
                <ul class="client">
                    <li class="client__item">
                        <a class="client__link" href="">
                            <svg class="client__icon">
                                <use href="./img-vect/sprite.svg#icon-company-1"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="client__item">
                        <a class="client__link" href="">                                <svg class="client__icon">
                                    <use href="./img-vect/sprite.svg#icon-company-2"></use>
                                </svg>                        </a>
                    </li>
                    <li class="client__item">
                        <a class="client__link" href="">                                <svg class="client__icon">
                                    <use href="./img-vect/sprite.svg#icon-company-3"></use>
                                </svg>                        </a>
                    </li>
                    <li class="client__item">
                        <a class="client__link" href="">                                <svg class="client__icon">
                                    <use href="./img-vect/sprite.svg#icon-company-4"></use>
                                </svg>                        </a>
                    </li>
                    <li class="client__item">
                        <a class="client__link" href="">
                            <svg class="client__icon">
                                    <use href="./img-vect/sprite.svg#icon-company-5"></use>
                                </svg>                        </a>
                    </li>
                    <li class="client__item">
                        <a class="client__link" href="">                                <svg class="client__icon">
                                    <use href="./img-vect/sprite.svg#icon-company-6"></use>
                                </svg>                        </a>
                    </li>
                </ul>
           </div>
        </section>
    </main>
    <!-- footer -->
    <footer class="footer">
        <div class="footer__container container">
            <div class="footer-tablet">
                <div>
                    <a class="logo footer__logo" href="./index.html"> Web<span class="footer-logo__accent">Studio</span></a>
                    <address class="footer-contacts">
                        <ul class="footer-contacts__list">
                            <li class="footer-contacts__item"><a class="footer-contacts__data footer-contacts__data--color"
                                    href="https://goo.gl/maps/ktapFahStS3y24yC7">г.
                                    Киев, пр-т Леси Украинки, 26</a>
                            <li class="footer-contacts__item"><a class="footer-contacts__data"
                                    href="mailto:info@example.com">info@example.com</a>
                            </li>
                            <li class="footer-contacts__item"><a class="footer-contacts__data" href="tel:+380991111111"> +38 099 111 11
                                    11</a>
                            </li>
                        </ul>
                    </address>
                </div>
                <div class="wellcom-block">
                    <h3 class="wellcom-block__title">присоединяйтесь</h3>
                    <ul class="social">
                        <li class="social_item ">
                            <a class="social__link" href="">
                                <svg width="20" height="20">
                                    <use href="./img-vect/sprite.svg#icon-instagram"> </use>
                                </svg>
                            </a>
                        </li>
                        <li class="social_item">
                            <a class="social__link" href="">
                                <svg width="20" height="20">
                                    <use href="./img-vect/sprite.svg#icon-twitter"> </use>
                                </svg>
                            </a>
                        </li>
                        <li class="social_item ">
                            <a class="social__link" href="">
                                <svg width="20" height="20">
                                    <use href="./img-vect/sprite.svg#icon-facebook"> </use>
                                </svg>
                            </a>
                        </li>
                        <li class="social_item ">
                            <a class="social__link" href="">
                                <svg width="20" height="20">
                                    <use href="./img-vect/sprite.svg#icon-linkedin"> </use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

<!-- Subscription -->

            <div class="subscription">
                <h3 class="subscription__title">Подпишитесь на рассылку</h3>
                <form class="subscription__form">
                    <label class="subscription__label" for="email"></label>
                    <input class="subscription__input" type="email" name="subscription" id="email" placeholder="E-mail" />
                    <button class="button subscription-button" type="submit">
                        Подписаться
                        <svg class="subscription-button__icon" width="24" height="24">
                            <use class="subscription-button__svg" href="./img-vect/sprite.svg#icon-send"></use>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </footer>

<!-- Модальное окно -->

    <div class="backdrop backdrop--is-hidden" data-modal >
        <div class="modal">
            <h3 class="modal__title">Оставьте свои данные, мы вам перезвоним</h3>
            <form class="modal__form">
                <ul class="modal__list">
                    <li class="modal__item">
                        <label class="modal__label"> Имя
                            <input class="modal__frame" type="text" placeholder=" " name="name">
                            <svg class="modal__icon">
                                <use class="modal__svg" href="./img-vect/sprite.svg#person-modal"></use>
                            </svg>
                        </label>
                    </li>
                    <li class="modal__item">
                        <label class="modal__label">Телефон
                            <input class="modal__frame" type="tel" name="tel">
                            <svg class="modal__icon">
                                <use class="modal__svg" href="./img-vect/sprite.svg#phone-modal"></use>
                            </svg>
                        </label>
                    </li>
                    <li class="modal__item">
                        <label class="modal__label">Почта
                            <input class="modal__frame" type="email" name="email">
                            <svg class="modal__icon">
                                <use class="modal__svg" href="./img-vect/sprite.svg#email-modal"></use>
                            </svg>
                        </label>
                    </li>
                    <li class="modal__item">
                        <label class="modal__label" >
                            Комментарий
                            <textarea class="modal__frame modal__textarea" name="comment" cols="10" rows="5" placeholder="Введите текст"></textarea>
                        </label>
                    </li>
                </ul>
                    <label class="checkbox">
                        <input class="checkbox__input" type="checkbox" name="policy">
                        <svg class="checkbox__icon" width="16px" height="15px">
                            <use href="./img-vect/sprite.svg#checkbox-border"></use>
                        </svg>
                        <span class="checkbox__text">Соглашаюсь с рассылкой и принимаю <a class="checkbox__text--accent" href="">Условия договора</a> </span>
                    </label>
                    <button class="button modal-button-submit" type="submit">Отправить</button>
            </form>
            <button data-modal-close class="modal-button-close" type="button">
                <svg class="modal-button-close__icon" width="18" height="18">
                    <use href="./img-vect/sprite.svg#icon-close"> </use>
                </svg>
            </button>
        </div>
    </div>

<!-- подключение файла JavaScript -->
<script src="./js/modal.js"> </script>
<script src="./js/mobile-menu.js"> </script>

</body>

</html>

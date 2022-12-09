import React from "react"
import "./footer.css"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left bg=black">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase proverka">проверяем стили css</h5>
                <h5 className="text-uppercase proverka">текст написан ии</h5>
                <p>Мормышки питаются насекомыми и маленькими беспозвоночными. Они имеют маленькие, большие или длинные уши и лапки. Они живут в прудах, реках, озерах и других водных территориях. Они обычно защищаются от врагов скрываясь в песке </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">ведут в никуда</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">черная дыра</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> Kalybek.com</a>
    </div>

</footer>

export default Footer
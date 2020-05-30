(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">Paper Kit 2 Angular</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 7</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n            </a>\n        </h6>\n    </div>\n    <div class=\"main\">\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Progress Bar</h3>\n                          <br/>\n                      </div>\n                      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Pagination</h3>\n                          <br/>\n                      </div>\n                      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Navigation Tabs</h3>\n                      </div>\n\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <ngb-tabset [justify]=\"'center'\">\n                                  <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                          <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here is your profile.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here are your messages.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                              </ngb-tabset>\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Labels</h3>\n                      </div>\n                      <span class=\"label label-default\">Default</span>\n                      <span class=\"label label-primary\">Primary</span>\n                      <span class=\"label label-info\">Info</span>\n                      <span class=\"label label-success\">Success</span>\n                      <span class=\"label label-warning\">Warning</span>\n                      <span class=\"label label-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-notifications\" id=\"notifications\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Notification</h3>\n              </div>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section javascript-components\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h2>Angular Native Components</h2>\n              </div>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Modal</h3>\n                      </div>\n                      <app-modal-component></app-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Popovers</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                          on right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          on top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          on left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          on bottom\n                      </button>\n\n                  </div>\n                  <br/>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Datepicker</h3>\n                      </div>\n                      <div class=\"row\">\n                          <div class='col-sm-6'>\n                              <form class=\"form-inline\">\n                                  <div class=\"form-group\">\n                                      <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\n                                          <div class=\"input-group-append\">\n                                              <span class=\"glyphicon glyphicon-calendar input-group-text\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                              </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </form>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Tooltips</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         on right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                        on left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         on top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                         on bottom\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"carousel\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Carousel</h3>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-8 mr-auto ml-auto\">\n                      <div class=\"card page-carousel\">\n                          <ngb-carousel>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere else</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Here it is</p>\n                                  </div>\n                              </ng-template>\n                          </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                  </div>\n\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n\n                                <label>Password</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-key-25\"></i>\n                                    </span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\n                        </a>\n                    </div>\n\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/user-profile']\">\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\n                            <i class=\"fa fa-github\"></i> Star\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main aboutus\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Sobre</h3>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <p>\n                            Somos um grupo de pesquisadores, de várias disciplinas, dedicados a estudar a evolução da Covid-19 no cenário da desigualdade extrema do Brasil. Criamos um modelo de simulação para o avanço \n                            das infecções de acordo com a densidade demográfica e o desenvolvimento humano de cada área. Buscamos angariar e elaborar medidas de combate à pandemia, tendo em vista a disparidade de \n                            condições sociais e econômicas no país.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h4>Contato:</h4>\n                        <p>\n                            Para comentários, sugestões e colaborações científicas: <a href=\"mailto:mosaicovid19@gmail.com?subject=Contato%20Equipe%20Ação%20Covid\" target=\"_blank\">mosaicovid19@gmail.com</a>\n                        </p>\n                        <p>\n                            Para imprensa e entrevistas: <a href=\"mailto:comunicamosaico@gmail.com?subject=Imprensa%20Equipe%20Ação%20Covid\" target=\"_blank\">comunicamosaico@gmail.com</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h4>Redes sociais:</h4>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"fb.me/AcaoCovid19\" target=\"_blank\">\n                                        <p><i class=\"fab fa-facebook-square fa-4x\"></i></p>\n                                        <p>Facebook</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://www.instagram.com/acao_covid/\" target=\"_blank\">\n                                        <p><i class=\"fab fa-instagram fa-4x\"></i></p>\n                                        <p>Instagram</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://twitter.com/AcaoCovid\" target=\"_blank\">\n                                        <p><i class=\"fab fa-twitter fa-4x\"></i></p>\n                                        <p>Twitter</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://www.youtube.com/channel/UC8duZjIo2hNZpc36B9gyZSg/featured\" target=\"_blank\">\n                                        <p><i class=\"fab fa-youtube fa-4x\"></i></p>\n                                        <p>YouTube</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            \n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card teamlist\">\n                        <h4>Equipe:</h4>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <ul class=\"list-unstyled\">\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/0107630830900915\">Alexandre Becker <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Mestrando em Economia Política Mundial na UFABC, Bacharel em Ciência e Tecnologia e Bacharel em Neurociências pela mesma instituição.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/5913369787997553\">Alexis Saludjian <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Economia UFRJ. Crescimento e Desenvolvimento Econômico, e Economia Internacional atuando principalmente nos seguintes temas: Desenvolvimento Econômico, Economia Política e História do Pensamento Econômico, Economia Internacional, Integração econômica regional e Teoria econômica.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"https://www.linkedin.com/in/ana-claudia-andreotti-388481106/\">Ana Claudia Andreotti <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Bacharel e mestra em Políticas Públicas na UFABC. Trabalha no GIFE como analista de Advocacy. </p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/4671276183191204\">Bruna Gaudencio Guimarães <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>MIT MicroMasters in Data, Economics and Development Policy. Bacharelado em Relações Internacionais e Ciências e Humanidades pela UFABC. Consultora de Analytics e pesquisadora em Biossegurança.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4766864A3\">Carlos da Silva dos Santos <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Processamento de Imagens, Reconhecimento de Padrões, Análise de Componentes Independentes, Teoria da Informação.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/7926761314005188\">Diana Maritza Segura Angel <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Doutorado em Ciências pela Universidade de São Paulo, desenvolveu sua pesquisa experimental na multinacional Tongaat Hulett na África do Sul. Áreas de interesse: Sistemas fotovoltaicos, eficiência energética, termodinâmica, física, estatística, análise de dados e mecânica dos fluidos.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/3707731487652877\">Diego Soares Viana de Oliveira  <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Doutor em Humanidades pela Universidade de São Paulo, mestre em Filosofia pela Universidade Paris X - Nanterre, economista pela Universidade de São Paulo. Experiência em comunicação social e filosofia das ciências humanas</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/8582022219085253\">Fábio Godoy Ferreira <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Mestrando em Engenharia de Energia na UFABC. Experiência na área de análise de dados, machine learning e modelos de planejamento/precificação de energia elétrica. </p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/2249781288255030\">Fábio Henrique Bittes Terra  <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Professor da UFABC e do PPGE-UFU. Pesquisador do CNPq. Pesquisa em macroeconomia, política econômica, teoria econômica e economia brasileira.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"#\">Giovanna Arícia Dagel Souza <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Graduanda no Bacharelado em Relações Internacionais pela Universidade Federal do ABC. Apreço e desenvolvimento atual pela área de comunicação digital, especificamente em produção gráfica para redes sociais e design de interfaces.</p>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <ul class=\"list-unstyled\">\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"https://www.linkedin.com/in/igor-renato-louro-bruno-de-abreu-92228744/\">Igor Renato Louro Bruno de Abreu  <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Especializado em cirurgia torácica, em especial tem grande experiência com tumores torácicos. Trabalha em diversos hospitais, em sua maioria no SUS, está na linha de frente desde o início da pandemia (nunca saiu).</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/2481434048339566\">João Pedro Loureiro Braga <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Graduando em Ciências Econômicas pela Universidade Federal do Rio de Janeiro (UFRJ). Estuda as áreas de desenvolvimento e desigualdades socioeconômicas, bem-estar e economia chinesa.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/0171085587279213\">Guilherme Prado Almeida De Souza <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Mestre em Ciências Humanas e Sociais pela Universidade Federal do ABC na linha de Economia e Desenvolvimento. Áreas de interesse: Economia ecológica, Limites Sociais e Ecológicos do Crescimento, Alternativas Sistêmicas. Constrói o projeto de Economia Solidária Livres Rede de Produção e Consumo Consciente.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4138649Z1\">José Paulo Guedes Pinto <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Sistemas complexos, crise econômica, ecologia urbana, economia política, economia da colaboração em massa, modelos dinâmicos, propriedade intelectual.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/2650858119455746\">Leonardo Freire de Mello <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Planejamento, ambiente e demografia, complexo população-ambiente-consumo, dimensões humanas das mudanças ambientais globais, participação pública nos processos de tomada de decisão.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/6177692858000498\">Luiz de Siqueira Martins Filho <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Robótica, satélites artificiais, e controle de sistemas dinâmicos.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/4559907236737788\">Maira Begalli <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Doutora em Planejamento e Gestão do Território pela UFABC. Estuda mudanças socioecológicas e ecologia de populações humanas no Antropoceno envolvendo: vulnerabilidade, resiliência e adaptação.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://lattes.cnpq.br/8096747745105128\">Maria Carolina Maziviero  <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Doutora em Arquitetura e Urbanismo - Fundamentos Sociais do Urbanismo e da Urbanização (FAUUSP). Professora do Departamento de Arquitetura e Urbanismo da Universidade Federal do Paraná (DAU-UFPR). </p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"https://pamgaiguer.github.io/pamgaiguer/\">Pamella Gaiguer Santos <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Bacharel em Sistemas de Informação (Mackenzie/SP). Programação Front-End, UX (User Experience) e UI (User Interface). </p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4592874A0\" target=\"_blank\">Patrícia Camargo Magalhães <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Pós-Doutoranda na Universidade de Bristol (Inglaterra) com bolsa de pesquisa Marie Curie da União Europeia. Também é vinculada à colaboração LHCb no CERN. Tem experiência na área de Física com ênfase em fenomenologia de Física de Partículas.</p>\n                                    </li>\n                                    <li>\n                                        <a class=\"researcher\" target=\"_blank\" href=\"#\">Rudá Lourenço Cabral Fernandez <i class=\"fas fa-external-link-alt\"></i></a>\n                                        <p>Graduando no Bacharelado de Ciência e Tecnologia pela Universidade Federal do ABC, cursando matérias do curso de Engenharia de Gestão. Experiência na área de comunicação por mídias sociais e análise de dados de processos produtivos.</p>\n                                    </li>\n                                </ul>\n                            </div>  \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article/article.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article/article.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main articles\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Artigos</h3>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"list-group\">\n                        <a routerLink=\"article1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Simulando a evolução da transmissão comunitária do coronavírus por meio do Modelo M D Corona\n                        </a>\n                        <a routerLink=\"article2\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Press Release\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-9\">\n                    <p [class.d-none]=\"isOpen()\">Escolha o artigo a ser lido na sua lateral.</p>\n                    <router-outlet></router-outlet>\n                </div>                    \n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/copacabana/copacabana.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/copacabana/copacabana.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main copacabana\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>copacabana</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            Um bairro, duas curvas: \n                            <br>\n                            Copacabana entre o morro e o asfalto\n                        </h4>\n                        <p>\n                            Copacabana não é só um bairro. É um microcosmo da desigualdade no epicentro do Rio de Janeiro. Da mesma janela onde se vê um dos hotéis mais luxuosos do país, ouvem-se rajadas da guerra do tráfico nas favelas que cercam o bairro. Entre mar e morro, Copacabana tem a maior densidade demográfica da cidade - 35.858 habitantes por quilômetro quadrado, segundo o IBGE (2020). A distribuição desigual de riqueza e pessoas é materializada pela presença de quatro comunidades: Pavão-Pavãozinho e Cantagalo, na divisa com Ipanema, Ladeira dos Tabajaras e Morro dos Cabritos. Em tempos de coronavírus, a discrepância das realidades entre asfalto e morro se refletem em distintos padrões de isolamento, transmissão e mortalidade entre as populações nessas áreas - constituindo um caso particular de como as desigualdades brasileiras são amplificadas na crise sanitária.\n                        </p>\n                        <br>\n                        <h4 class=\"text-center\">1. Histórico, densidade e condições de vida:</h4>\n                        <p>\n                            Situado em um morro entre Ipanema e Copacabana, as comunidades do Cantagalo e Pavão-Pavãozinho acolhem 20.000 moradores do Rio, com 15.000 na primeira e 5.000 na segunda segundo os dados do IBGE de 2010. A história dessas comunidades remonta à chegada de ex-escravos de Minas Gerais que se estabeleceram no Cantagalo e do Nordeste brasileiro no Pavão-Pavãozinho em 1907, em paralelo com o início da urbanização das regiões de asfalto em Copacabana. Vale ressaltar que ao longo da história carioca os habitantes de comunidades tiveram suas demandas sumariamente ignoradas pelas autoridades políticas - construindo uma cenário institucional de marginalização e vulnerabilidade no centro de um dos bairros mais valorizados da capital fluminense.\n                        </p>\n                        <p>\n                            Em relação à distribuição desigual de riqueza e condições de vida no bairro a tabela abaixo resume as diferenciação nas condições de vida no bairro de Copacabana. Em particular, a área mais rica ao redor da estação de metrô Cardeal Arcoverde, apresenta maior IDH, menor densidade e maior cobertura de água encanada quando comparada à comunidade do Pavão-Pavãozinho - reforçando que nessas áreas a transmissão do vírus pode potencialmente ser maior. Com maior densidade populacional associada a elevados níveis de vulnerabilidade socioeconômica e menor cobertura de saneamento básico, a população desta comunidade se vê menos protegida contra a crise sanitária da Covid-19. Somado o fato de que boa parte dos seus habitantes dependem de um emprego informal para a subsistência e, por isso o trabalho remoto não é uma opção para essas pessoas, a situação de vulnerabilidade se agrava.\n                        </p>\n                        <br>\n                        <div class=\"table-responsive\">\n                            <table class=\"table  table-bordered table-striped table1\">\n                                <caption>Tabela 1 - Estatísticas resumo das condições de vida em Copacabana</caption>\n                                <caption>Fontes: Atlas do Desenvolvimento do IBGE e notícias citadas nas referências</caption>\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th>IDHM (2010)</th>\n                                        <th>% Água Encanada</th>\n                                        <th>Densidade Bruta</th>\n                                        <th>Quarentena</th>\n                                        <th>Isolamento Social</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th>Copacabana Média</th>\n                                        <td>0,935</td>\n                                        <td>99%</td>\n                                        <td>35.705 ha/km²</td>\n                                        <td>Recomendada, não imposta</td>\n                                        <td>70%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>Cardeal Arcoverde</th>\n                                        <td>0,955</td>\n                                        <td>100%</td>\n                                        <td>15.933 ha/km²</td>\n                                        <td>Moradores em casa desde 20/03</td>\n                                        <td> - </td>\n                                    </tr>\n                                    <tr>\n                                        <th>Pavão - Pavãozinho</th>\n                                        <td>0,684</td>\n                                        <td>97%</td>\n                                        <td>25.845 ha/km²</td>\n                                        <td>“Isolamento social na favela é coisa de novela”</td>\n                                        <td> - </td>\n                                    </tr>\n                                </tbody>\n                                \n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            2. Covid-19 e morbidade: Duas curvas inseparáveis\n                        </h4>\n                        <p>\n                            Na semana do dia 11 de Maio, o bairro de Copacabana tomou o topo do ranking dos casos de coronavírus na capital fluminense. Eram 416 infectados e 73 vítimas da Covid-19 no bairro segundo o boletim da Secretaria Municipal de Saúde divulgado no dia 11 (VEJA, 2020). Em relação à evolução temporal dos casos, durante o mês de abril as áreas nobres como Copacabana na Zona Sul e a Barra da Tijuca na Zona Oeste concentravam 70% dos casos no Rio de Janeiro - pois a transmissão interna começou pelas classes mais abastadas. A partir de meados de abril e principalmente no mês de Maio, no entanto, especialistas passaram a alertar para o avanço da pandemia nas favelas cariocas (UOL, 2020) - sinalizando a existência de duas curvas de contaminação da doença. Isso, pois a transmissão de vírus pode ser facilitada nessas densas populações, caracterizadas por contato inter-individual frequente, moradias lotadas, sistemas inadequados de saneamento, educação deficiente e estado nutricional deficiente.  O cenário caótico se materializou com filas de pacientes infectados sem leitos em áreas vulneráveis e densas. A primeira morte no Estado foi de uma empregada doméstica de 63 anos, que morreu no dia 17 de Março ao ser infectada no contato com sua patroa - residente da Zona Sul - que acabara de voltar da Itália e já apresentava sintomas.\n                            \n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/copa_asfalto.png\" class=\"figure-img img-fluid\" alt=\"copacabana asfalto\">\n                                    <figcaption class=\"figure-caption text-center\">\n                                        Foto 2 - Coronavírus no asfalto / Crédito: Uol Notícias \n                                    </figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/copa_morro.png\" class=\"figure-img img-fluid\" alt=\"copacabana morro\">\n                                    <figcaption class=\"figure-caption text-center\">\n                                        Foto 3 - Coronavírus no morro / Crédito: Uol Notícias \n                                    </figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        \n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            3. Isolamento social: Duas quarentenas entre asfalto e morro\n                        </h4>\n                        <p>\n                            Além da maior transmissão nas regiões mais vulneráveis, um problema central para o controle do contágio é a inviabilidade do lockdown nessas áreas sem que haja uma política de sustentação de \n                            renda permanente que diminua a vulnerabilidade da população. Em paralelo, uma parcela considerável dos domicílios ainda luta pelo direito ao acesso à água \n                            encanada (KONDZILLA, 2020). Se nas áreas centrais do asfalto medidas de lockdown parcial são esperadas nas próximas semanas, o primeiro bairro da Zona Sul a ter \n                            restrições à mobilidade, a situação das comunidades é mais complicada. No Pavão-Pavãozinho muitos comerciantes fecharam  portas, mas o movimento continuou elevado até a proibição do \n                            comércio em comunidades pela prefeitura - situação não registrada em nenhum dos locais com restrições parciais à mobilidade. O problema com o isolamento social nas comunidades cariocas é \n                            que boa parte dos seus moradores depende de trabalhos informais impossíveis em trabalho remoto, então a quarentena dificulta a sobrevivência econômica dessas pessoas. De fato, muitos moradores \n                            trabalham informalmente em estabelecimentos do asfalto e o lockdown tem como consequência o aumento da vulnerabilidade (FOLHA, 2020). Assim, a epidemia não estará controlada enquanto não houver um esforço de solidariedade com aqueles que em situação de maior vulnerabilidade. \n                        </p>\n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            4. Políticas públicas para preservar vidas:\n                        </h4>\n                        <p>\n                            Dadas as condições socioeconômicas e sanitárias particulares associadas à transmissão do Covid-19 nas favelas brasileiras, o uso dos modelos preditivos desenvolvidos para essas realidades é de suma importância para o desenvolvimento de políticas públicas que possibilitem salvar vidas e proteger os mais vulneráveis. Nessa linha, o nosso simulador de dispersão do coronavírus (MD Corona) proposto por Guedes Pinto; Magalhães; Santos (2020) simula políticas de isolamento de forma a entender a disseminação do COVID-19, considerando as características socioeconômicas e a densidade populacional do bairro de Copacabana e a dinâmica desigual entre o morro do Pavão-Pavãozinho e o asfalto. \n                        </p>\n                        <p>\n                            As curvas abaixo resumem os resultados e os cenários adotados:\n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 1 - Simulação sem intervenção no asfalto e no morro</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario1_copa.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Copacabana</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario1_pavao.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Pavão</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 2 - Simulação com isolamento de 80% da população</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario2_copa.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Copacabana</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario2_pavao.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Pavão</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 3 - Isolamento total (Lockdown - 92% da população)</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario3_copa.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Copacabana</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/copacabana/cenario3_pavao.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Pavão</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"table-responsive-sm\">\n                            \n                            <table class=\"table table-bordered table-striped table2 float-left\">\n                                <caption>Tabela comparativa dos Cenários e taxas de simulação (200 dias de simulação / 100 simulações):</caption>\n                                <thead>\n                                    <tr>\n                                        <th>Cenário</th>\n                                        <th>Intervenção</th>\n                                        <th colspan=\"2\">\n                                            % Total de Infectados\n                                            <br>\n                                            Copa x Pavão\n                                        </th>\n                                        <th colspan=\"2\">\n                                            % de Mortos\n                                            <br>\n                                            Copa x Pavão\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th>#1</th>\n                                        <td>Nenhuma</td>\n                                        <td>~99%</td>\n                                        <td>~92%</td>\n                                        <td>~0,9%</td>\n                                        <td>2%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>#2</th>\n                                        <td>80%</td>\n                                        <td>~25%</td>\n                                        <td>~68%</td>\n                                        <td>~0,25%</td>\n                                        <td>~1,25%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>#3</th>\n                                        <td>92%</td>\n                                        <td>~3%</td>\n                                        <td>~16%</td>\n                                        <td>~0,02%</td>\n                                        <td>~0,3%</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        \n                        <p class=\"float-left\">\n                            Os resultados deste estudo corroboram a forte vulnerabilidade das comunidades diante da crise sanitária, ressaltando a importância de medidas de isolamento social adaptadas à \n                            realidade dessas comunidades para poupar vidas. Isso, pois o cenário de isolamento total (92% de confinamento) teria como consequência um menor número de contaminados. No asfalto esse \n                            número é 3% de infectados em 7 meses  o que sobe para 16% no caso da comunidade. Embora significativamente maior que no asfalto é suficiente para  não haver sobrecarga do sistema de saúde. \n                            Por outro lado, no cenário 2, com confinamento de 80%, vemos que a discrepância entre asfalto e comunidade é gritante. Enquanto no primeiro o número de infectados \n                            seria 25% em 7 meses, o que não sobrecarrega o sistema de saúde, na comunidade seriam 68% infectados com 1,25% de mortos.  Sem nenhuma intervenção de isolamento social ambos atingem um \n                            elevado contingente de mortos que é mais duro para a comunidade. Assim, aponta-se para a importância da coordenação entre os diversos níveis de autoridade pública e movimentos sociais \n                            e lideranças comunitárias no enfrentamento da crise. É necessário pensar em políticas de isolamento social adaptadas à realidade de cada área com manutenção da renda de forma a salvar \n                            vidas em um esforço coletivo de solidariedade. Nesse sentido, mesmo que o vírus não tenha um efeito democrático sobre a sociedade, afetando mais severamente os mais vulneráveis, as \n                            curvas entre morro e asfalto são fenômenos inseparáveis.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h5>Referências:</h5>\n                        <ul class=\"list-unstyled references\">\n                            <li>BRASIL 247, B. \"Isolamento social é coisa de novela\", diz moradora de favela no Rio. Maio.</li>\n                            <li>IBGE. Atlas do desenvolvimento humano no Brasil. Disponível em: <a href=\"http://atlasbrasil.org.br/2013/\" target=\"_blank\">http://atlasbrasil.org.br/2013/</a>. Acesso em: 13 maio. 2020.</li>\n                            <li>KLOH, V.; SILVA, G.; FERRO, M. The virus and socioeconomic inequality: An agent-based model to simulate the impact of interventions to reduce the spread of COVID-19 in Rio de Janeiro, Brazil. <strong>Brazilian Journal of Health Review</strong>, v. 2, p. 2205, 2020.</li>\n                            <li>KONDZILLA. \"Ainda lutamos pelo direito à água\", #COVID19NasFavelas do Rio, saiba como ajudar! <strong>2020</strong>, mar.</li>\n                            <li>SEBRAE/RJ, O. Painel Regional: Rio de Janeiro e Bairros. p. 16, 2015.</li>\n                            <li>SP, F. DE. Ambulantes de Copacabana são atingidos pe. 18 mar. 2020.</li>\n                            <li>UOL. No TitleÁreas nobres do Rio concentram 70% dos casos; covid-19 avança para favelas. 2020, mar.</li>\n                            <li>UOL. Líder de casos de covid-19, Copacabana terá \"lockdown parcial\" neste mês. maio.</li>\n                            <li>UOL. Prefeitura do Rio determina fechamento do comércio em favelas para conter coronavírus. 2020, maio.</li>\n                            <li>VEJA RIO. Covid-19: Copacabana segue como líder em casos e mortes. 2020, maio.</li>\n                            <li>Guedes Pinto, José Paulo; Magalhães, Patrícia; Santos Carlos Silva. (2020). Modelo de Dispersão Comunitária Coronavírus (MD Corona), Universidade Federal do ABC, São Bernardo do Campo, Brasil.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/fortaleza/fortaleza.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/fortaleza/fortaleza.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main fortaleza\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Fortaleza</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            Um bairro, duas curvas: \n                            <br>\n                            Entre Barra do Ceará e Meireles\n                        </h4>\n                        <p>\n                            A crise sanitária imposta pelo novo coronavírus não é democrática. Mesmo que o vírus possa contaminar a todos da sociedade, os mais socioeconomicamente vulneráveis se encontram menos protegidos contra a transmissão, a morbidade e as consequências do isolamento. Assim, a análise da expansão do Covid-19 em diferentes territórios é um importante elemento na compreensão das diferentes dimensões dessa crise. Em tempos de coronavírus, a discrepância das realidades entre Barra e Meireles se refletem em distintos padrões de isolamento, transmissão e mortalidade entre as populações nessas áreas - constituindo um caso de como as já extremas desigualdades da capital cearense são ainda mais amplificadas.\n                        </p>\n                        <br>\n                        <h4 class=\"text-center\">1. Histórico, densidade e condições de vida:</h4>\n                        <p>\n                            Fortaleza, capital do Estado do Ceará, é a 5ª maior capital do Brasil,  concentra praticamente um terço da população do Estado (IBGE, 2010). Está entre as três principais capitais do Nordeste e é um dos municípios com maior densidade demográfica do Brasil com 8390 hab/Km2.  Sede do maior banco regional da América Latina (Banco Regional do Nordeste), Fortaleza é um importante polo de atividades de serviços, incluindo o turismo.  O IDH da capital é classificado como alto (0,754), mas Fortaleza já foi indicada pela ONU (G1, 2012a) como a 2ª cidade mais desigual da América Latina (índice de gini de 0,60) em 2012. \n                        </p>\n                        <p>\n                            Situados no litoral da capital, os bairros de Barra do Ceará e Meireles possuíam 72.000 e 32.000 habitantes, respectivamente, segundo o censo de 2010 (IBGE, 2010). Ambos os bairros tiveram os primeiros óbitos registrados na última semana de março. A situação de Meireles piorou em meados de abril, mas, desde então, não se registram praticamente mais óbitos no bairro. Atualmente, os óbitos se concentraram na região próxima à Barra do Ceará. Em relação à distribuição desigual de riqueza, a tabela abaixo resume as condições de vida nos bairros. Com IDH elevado e baixa densidade, Meireles foi atingido no início da pandemia enquanto a Barra do Ceará, com IDH baixo e alta densidade, concentra mortes em Maio. \n                        </p>\n                        <br>\n                        \n                        \n                        \n                        <div class=\"table-responsive\">\n                            <table class=\"table  table-bordered table-striped table1\">\n                                <caption>Tabela 1 - Estatísticas resumo das condições de vida nos dois bairros</caption>\n                                <caption>Fontes: IBGE, Atlas do desenvolvimento humano e notícias referenciadas</caption>\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th>IDHM (2010)</th>\n                                        <th>Densidade Bruta</th>\n                                        <th>Quarentena</th>\n                                        <th>Isolamento Social (em 14/05)</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th>Fortaleza</th>\n                                        <td>0,754</td>\n                                        <td>8.390 hab/km<sup>2</sup></td>\n                                        <td>Lockdown desde 08/05</td>\n                                        <td>55%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>Meireles</th>\n                                        <td>0,953</td>\n                                        <td>14.334 hab/km<sup>2</sup></td>\n                                        <td>Lockdown garantido pela polícia</td>\n                                        <td>70%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>Barra do Ceará</th>\n                                        <td>0,215</td>\n                                        <td>17.040 hab/km<sup>2</sup></td>\n                                        <td>Mesmo sob lockdown, rotina social mantida</td>\n                                        <td>50%</td>\n                                    </tr>\n                                </tbody>\n                                \n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            2. Covid-19 e morbidade: Duas curvas inseparáveis\n                        </h4>\n                        <p>\n                            No dia 15 de Março, foram registrados os três primeiros casos do novo coronavírus em Fortaleza. Em uma dinâmica parecida com a registrada em diversas capitais do país, esses primeiros casos se concentraram em regiões mais ricas, como no bairro de Meireles e a região da Praia do Futuro, indicando que o vírus teria começado a circular nessas áreas mais abastadas vindo do exterior. Na semana do dia 22 de Maio, a cidade registrava mais de 18 mil casos e 1600 mortes, sendo o epicentro da crise sanitária no Estado, segundo o boletim da Secretaria Municipal de Saúde (Fortaleza, 2020). A partir de meados de abril e principalmente no mês de Maio, no entanto, registrou-se uma tendência de avanço da pandemia nas periferias da cidade  (Diário, 2020a) - sinalizando a existência de duas curvas de contaminação da doença. No bairro de Meireles, de 1º de Abril até 25 de Maio, tivemos mais casos (649), mas menos mortes (27) que em Barra do Ceará  (400 casos e 58 mortes). Uma mortalidade quase três vezes menor no bairro mais rico (4,2% contra 14,5%).\n                        </p>\n                        <p>\n                            Em 14/05, dos 10 bairros com maiores índices de mortes todos estavam na periferia da cidade. Isso, pois a transmissão de vírus pode ser facilitada nessas densas populações, caracterizadas por contato inter-individual frequente, moradias lotadas, sistemas inadequados de saneamento, educação deficiente e estado nutricional deficiente. A situação de infraestrutura social deficitária se materializou em filas de pacientes infectados e sem leitos, em áreas vulneráveis e densas. Assim,  seja pela impossibilidade de isolamento em moradias precárias, seja pela falta de acesso à saúde pública, o número de casos confirmados e de mortes rapidamente migrou da zona rica às mais vulneráveis. \n                        </p>\n                        \n                        \n                        \n                        \n                        \n                        \n                        \n                        \n                        \n                        <div class=\"row\">\n                            <div class=\"col-sm-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/fortaleza_meireles.png\" class=\"figure-img img-fluid\" alt=\"fortaleza meireles\">\n                                    <figcaption class=\"figure-caption text-center\">\n                                        Foto 2 - Coronavírus em Meireles, com isolamento e baixa densidade / Fonte: Diário do Nordeste / Crédito: Uol Notícias \n                                    </figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-sm-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/fortaleza_barradoceara.jpg\" class=\"figure-img img-fluid\" alt=\"fortaleza barra do ceara\">\n                                    <figcaption class=\"figure-caption text-center\">\n                                        Foto 3 - Coronavírus na Barra do Ceará, com rotina social mantida / Fonte: Diário do Nordeste / Crédito: Uol Notícias \n                                    </figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        \n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            3. Isolamento social: Duas quarentenas entre Barra e Meireles\n                        </h4>\n                        <p>\n                            Além da maior transmissão nas regiões mais vulneráveis, um problema central para o controle do contágio nesses territórios é a inviabilidade do lockdown nas periferias sem que haja uma políticas sanitárias e de sustentação de renda permanente que diminua a vulnerabilidade da população. No caso de Fortaleza, a partir do dia 8 de Maio foi imposta uma política de lockdown (tranca-rua) na cidade, com sanções e autuações no caso de indivíduos que descumpram a ordem de não sair de casa para atividades não-essenciais, sendo este decreto ampliado até o final do mês de Maio pelo menos.  No que diz respeito à efetividade dessas políticas, se nas áreas centrais da cidade como no bairro de Meireles o lockdown foi relativamente eficaz (de 70 a 80% de isolamento), a situação das periferias é mais complicada (O Povo, 2020) . \n                        </p>\n                        <p>\n                            Nas regiões  periféricas da cidade, como a Barra do Ceará, o lockdown parece ser uma medida distante. De fato, na Barra a taxa de isolamento em 14/05 era de 50% e na Vila Pery de 20% - muito longe da meta de 70% recomendada pela Prefeitura. Na Barra, moradores relatam manutenção da rotina social e falta de fiscalização, resultados da impossibilidade de se executar isolamento em condições de moradia precária (Diário, 2020c). Além disso, aglomerações foram registradas em decorrência das filas para requisição do auxílio emergencial em agências da Caixa - sem o requisito de máscaras. Há grandes desafios para atingir o isolamento social necessário na periferia de Fortaleza, um deles é que boa parte dos seus moradores depende de trabalhos informais inviáveis de forma remota. \n                        </p>\n                        <p>\n                            Somando-se a esse fator temos a dificuldade de acesso e recebimento da renda básica emergencial, quadro que dificulta a sobrevivência econômica dessas pessoas na situação de quarentena. De fato, muitos moradores trabalham informalmente em estabelecimentos de regiões mais ricas da cidade como Meireles e o lockdown tem como consequência o aumento da vulnerabilidade (DIÁRIO, 2020c). Assim, a epidemia não estará controlada enquanto não houver um esforço de solidariedade, através de ações coordenadas de política pública, direcionadas para aqueles em situação de maior vulnerabilidade.\n                        </p>\n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">\n                            4. Políticas públicas para preservar vidas:\n                        </h4>\n                        <p>\n                            Dadas as condições socioeconômicas e sanitárias particulares associadas à transmissão do Covid-19 nas favelas brasileiras, o uso dos modelos preditivos desenvolvidos para essas realidades é de suma importância para o desenvolvimento de políticas públicas que possibilitem salvar vidas e proteger os mais vulneráveis. Nessa linha, o nosso simulador de dispersão do coronavírus (MD Corona) proposto por Guedes Pinto; Magalhães; Santos (2020) simula políticas de isolamento de forma a entender a disseminação do COVID-19, considerando as características socioeconômicas e a densidade populacional. \n                        </p>\n                        <p>\n                            As curvas abaixo resumem simulações e resultados para Meireles e Barra do Ceará:\n                        </p>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 1 - Simulação sem intervenção de isolamento social.</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario1_meireles.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Meireles</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario1_barradoceara.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Barra do Ceará</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        <p>Nesse cenário  ambos os bairros  atingem rapidamente a imunidade de rebanho com  ~35%  da população de Meireles  e ~52% da Barra do Ceará contaminada no pico da curva  após  aproximadamente 50 dias. Esse número é extremamente elevado e levaria ao caos no sistema de saúde em ambos os territórios.  A  diferença se reflete principalmente na porcentagem de mortos: enquanto a Barra do Ceará teria ~2%  da população, Meireles teria metade, ~1% da população morta. </p>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 2 - Simulação com isolamento de 70% da população</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario2_meireles.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Meireles</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario2_barradoceara.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Barra do Ceará</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n                        \n                        <p>\n                            No cenário em que  70% da população estivesse de fato confinada,  como vem sugerindo o Estado do Ceará, os resultados ainda são bastante diversos para os dois territórios.  No rico bairro de Meireles, o ápice da curva pandêmica atinge aproximadamente 6% da população ao mesmo tempo,  na Barra do Ceará esse número sobe para ~16%.  Enquanto o primeiro está no limite da capacidade do sistema de saúde o segundo é quase 3 vezes superior. Essa diferença se torna ainda mais problemática se se considera a porcentagem de mortos: ~1,5% na Barra do Ceará (1080 pessoas) contra ~ 0.5% (160 pessoas) em Meireles, níveis extremamentes altos em ambos os casos.\n                        </p>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 3 - Isolamento total (Lockdown - 80% da população)</strong>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario3_meireles.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Meireles</figcaption>\n                                </figure>\n                            </div>\n                            <div class=\"col-xs-12 col-md-6\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario3_barradoceara.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Barra do Ceará</figcaption>\n                                </figure>\n                            </div>\n                        </div>\n\n                        <p>\n                            Com 80% de confinamento Meireles consegue resolver e estancar a pandemia apresentando apenas pequenas flutuações. Ao passo que na Barra do Ceará ainda podemos observamos uma média de ~8% da população contaminada, a mesma faixa observada para Meireles no cenário anterior (com 70% de confinamento). A taxa de mortalidade é ainda muito alta para Barra do Ceará, na faixa de 0,8% (576 pessoas), enquanto em Meireles esse número é ao menos três vezes menor, 0.25% (80 pessoas).\n                        </p>\n\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-12\">\n                                <p class=\"text-center\">\n                                    <strong>Cenário 4 - Isolamento total (Lockdown - 86% da população)</strong>\n                                </p>\n\n                                <p>\n                                    Para atingir o mesmo nível de supressão ao vírus que Meireles, a Barra do Ceará precisa de um confinamento de 86%.\n                                </p>\n                            </div>\n                        </div>\n\n                        <div class=\"row justify-content-md-center\">\n                            <div class=\"col-xs-12 col-md-8\">\n                                <figure>\n                                    <img src=\"./assets/img/fortaleza/cenario4_barradoceara.png\" class=\"figure-img img-fluid\" alt=\"\">\n                                    <figcaption class=\"figure-caption text-center\">Barra do Ceará</figcaption>\n                                </figure>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"table-responsive-sm\">\n                            \n                            <table class=\"table table-bordered table-striped table2 float-left\">\n                                <caption>Tabela comparativa dos Cenários e taxas de simulação (200 dias de simulação / 100 simulações):</caption>\n                                <thead>\n                                    <tr>\n                                        <th>Cenário</th>\n                                        <th>Intervenção</th>\n                                        <th colspan=\"2\">\n                                            % Total de Infectados\n                                            <br>\n                                            Meireles x Barra do Ceará\n                                        </th>\n                                        <th colspan=\"2\">\n                                            % de Mortos\n                                            <br>\n                                            Meireles x Barra do Ceará\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <th>#1</th>\n                                        <td>Nenhuma</td>\n                                        <td>~35%</td>\n                                        <td>~52%</td>\n                                        <td>~1%</td>\n                                        <td>~2%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>#2</th>\n                                        <td>70%</td>\n                                        <td>~6%</td>\n                                        <td>~16%</td>\n                                        <td>~0,5%</td>\n                                        <td>~1,5%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>#3</th>\n                                        <td>80%</td>\n                                        <td>~2%</td>\n                                        <td>~8%</td>\n                                        <td>~0,25%</td>\n                                        <td>~0,08%</td>\n                                    </tr>\n                                    <tr>\n                                        <th>4</th>\n                                        <td>86%</td>\n                                        <td>~baixo%</td>\n                                        <td>~2%</td>\n                                        <td>~baixo%</td>\n                                        <td>~0,3%</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        \n                        <p class=\"float-left\">\n                            Os resultados deste estudo corroboram a forte vulnerabilidade das comunidades diante da crise sanitária, ressaltando a importância de medidas de isolamento social adaptadas à realidade dessas comunidades para poupar vidas (no link \"como agir\", damos exemplos do que pode ser feito pelos poderes públicos locais, estaduais e federais em conjunto com as lideranças dos bairros mais vulneráveis para mitigar as terríveis consequências da pandemia). \n                        </p>\n                        <p>\n                            Um cenário de isolamento total (86% de confinamento) teria como consequência um menor número de contaminados. Ainda assim, nossas simulações apontam que em 7 meses Meireles teria um total de 4% de pessoas infectadas pelo novo coronavírus, ao mesmo tempo em que 20% das pessoas teriam contato com o vírus na comunidade Barra do Ceará. Esse número, ainda que seja maior para o caso da Barra, é suficiente para não haver sobrecarga no sistema de saúde da região. \n                        </p>\n                        <p>\n                            Por outro lado, no cenário 3, com o isolamento social sendo praticado por 80%, a discrepância entre Meireles e a Barra é alarmante. Enquanto que no bairro mais rico o número de infectados total atingiria 9% da população em 7 meses, no bairro mais pobre, em 7 meses, 42% da população seria infectada, resultando um total de aproximadamente  0.8% de mortos (576 pessoas segundo o censo de 2010). \n                        </p>\n                        <p>\n                            Sem nenhuma intervenção de isolamento social, ambos atingem um elevado contingente de mortos que é mais duro para a comunidade. Assim, aponta-se para a importância da coordenação entre os diversos níveis de autoridade pública, movimentos sociais e lideranças comunitárias no enfrentamento da crise. É necessário pensar em políticas de isolamento social adaptadas à realidade de cada área com manutenção da renda e melhora nas condições sanitárias urgentes, de forma a salvar vidas em um esforço coletivo de solidariedade. \n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h5>Referências:</h5>\n                        <ul class=\"list-unstyled references\">\n                            <li>Diário do Nordeste. Em dia de recorde de casos no Ceará, periferia tem maior letalidade. 16 de abril de 2020a. Disponível <a href=\"https://diariodonordeste.verdesmares.com.br/editorias/metro/em-dia-de-recorde-de-casos-no-ceara-periferia-tem-maior-letalidade-1.2235091\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>Diário do Nordeste. Primeiro dia de lockdown em Fortaleza tem bloqueios em vias, mas com aglomerações em alguns pontos. 8 de maio de 2020b. Disponível <a href=\"https://diariodonordeste.verdesmares.com.br/editorias/metro/online/primeiro-dia-de-lockdown-em-fortaleza-tem-bloqueios-em-vias-mas-com-aglomeracoes-em-alguns-pontos-1.2243386\" target=\"_blank\">aqui</a>  Acessado em 25 de maio de 2020.</li>\n                            <li>Diário do Nordeste. Dez Bairros com mais mortes por COVID-19 estão na periferia de Fortaleza. 15 de maio de 2020c. Disponível <a href=\"https://diariodonordeste.verdesmares.com.br/editorias/metro/dez-bairros-com-mais-mortes-por-covid-19-estao-na-periferia-de-fortaleza-1.2245835\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020. </li>\n                            <li>G1. Fortaleza é uma das cidades mais desiguais da América Latina,diz ONU. 22 de agosto de 2012a. Disponível   <a href=\"http://g1.globo.com/ceara/noticia/2012/08/fortaleza-e-uma-das-cidades-mais-desiguais-da-america-latina-diz-onu.html\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020. </li>\n                            <li>G1. Três primeiros casos de coronavírus no Ceará são confirmados pela Secretaria da Saúde. 15 de março de 2020. Disponível <a href=\"https://g1.globo.com/ce/ceara/noticia/2020/03/15/tres-primeiros-casos-de-coronavirus-no-ceara-sao-confirmados-pela-secretaria-da-saude.ghtml\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020</li>\n                            <li>G1. Governador do Ceará prorroga decreto de isolamento; Fortaleza segue em lockdown até fim de maio. 20 de maio de 2020. Disponível <a href=\"https://g1.globo.com/ce/ceara/noticia/2020/05/20/governador-do-ceara-prorroga-decreto-de-isolamento-fortaleza-segue-com-medidas-mais-rigidas.ghtml\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020. </li>\n                            <li>G1. Descumprimento ao decreto de isolamento leva 1.479 abordagens policiais durante lockdown em Fortaleza. 18 de maio de 2020. Disponível <a href=\"https://g1.globo.com/ce/ceara/noticia/2020/05/18/descumprimento-ao-decreto-de-isolamento-leva-1479-abordagens-policiais-durante-lockdown-em-fortaleza.ghtml\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>Instituto Brasileiro de Geografia Estatística (IBGE). Censo 2010. 2010. Disponível <a href=\"https://censo2010.ibge.gov.br/\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>O Povo. Três primeiros casos de coronavírus são confirmados no Ceará. 15 de março de 2020. Disponível <a href=\"https://www.opovo.com.br/coronavirus/2020/03/15/tres-casos-de-coronavirus-sao-confirmados-no-ceara.html\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>O Povo. Com 20%, Vila Pery registra menor taxa de isolamento social de Fortaleza; Capital tem média de 55%. 14 de maio de 2020. Disponível <a href=\"https://www.opovo.com.br/coronavirus/2020/05/14/com-20---vila-pery-registra-menor-taxa-de-isolamento-social-de-fortaleza--capital-tem-media-de-55.html\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>Fortaleza, Prefeitura de. Boletins Epidemiológicos. 22 de maio de 2020. Disponível <a href=\"https://coronavirus.fortaleza.ce.gov.br/boletim-epidemiologico.html\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                            <li>Kondzilla. \"Ainda lutamos pelo direito à água\",  #COVID-19NASFAVELASDORIO, saiba como ajudar. 24 de março de 2020. Disponível <a href=\"https://kondzilla.com/m/ainda-lutamos-pelo-direito-a-agua-covid19nasfavelas-do-rio-saiba-como-ajudar/#materia\" target=\"_blank\">aqui</a>. Acessado em 25 de maio de 2020.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dash/dash.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dash/dash.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main dash\">\n    <div class=\"section section-gray text-center\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Simulador</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"simulador embed-responsive embed-responsive-4by3\">\n                            <iframe src=\"https://zecopol.github.io/zecopol/\" \n                            scrolling=\"yes\"></iframe>\n                            <!-- sandbox=\"allow-same-origin allow-scripts\" / *ngIf=\"isMobile == false\" -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"table-responsive-sm table-responsive-md\">\n                            <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" >\n                                <thead>\n                                    <tr>\n                                        <th>Cidade</th>\n                                        <th>Bairro</th>\n                                        <th>IPC</th>\n                                        <th>Classificação IPC</th>\n                                        <th>IDH</th>\n                                        <th>Classificação IDH</th>\n                                        <th>Densidade (hab/km<sup>2</sup>)</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let dados of ipc_rj_ce; let i = index\">\n                                        <td>{{dados.cidade}}</td>\n                                        <td>{{dados.bairro}}</td>\n                                        <td>{{dados.ipc}}</td>\n                                        <td>{{dados.classIPC}}</td>\n                                        <td>{{dados.idh}}</td>\n                                        <td>{{dados.classIDH}}</td>\n                                        <td>{{dados.densidade}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main home\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <figure class=\"figure\">\n                            <img src=\"./assets/img/home_foto2.jpg\" class=\"mx-auto d-block img-fluid\">\n                            <figcaption class=\"figure-caption text-right\">Créditos: Marcelo Rocha</figcaption>\n                        </figure>\n                        <h4 class=\"text-center\">Pandemia em um país desigual</h4>\n                        <p>\n                            No país desigual que é o Brasil, uma pandemia como a do Covid-19 não atinge igualmente todas as pessoas, em todos os lugares, de todas as classes sociais. As medidas de resposta ao avanço do vírus devem ser ajustadas às condições de cada Estado, cidade e bairro. É responsabilidade de todos os entes da União entender essas diferenças e planejar o combate à disseminação da doença.\n                        </p>\n                        <p>\n                            O Ação Covid-19 é um grupo interdisciplinar de pesquisadores e professores, que se uniram para entender como a desigualdade afeta a evolução da doença no Brasil. Com esse conhecimento, propomos medidas de proteção das populações, organização do isolamento social e mitigação de seus efeitos sociais e econômicos.\n                        </p>\n                        <p>\n                            Desenvolvemos, a partir dos principais modelos epidemiológicos, um simulador do avanço da epidemia. A ferramenta pode ser usada por todos os brasileiros para calcular como deve se desenrolar a pandemia em seu próprio bairro, ajustada pela densidade demográfica, o Índice de Desenvolvimento Humano (IDH) e a porcentagem de pessoas que respeitam o confinamento. Assim, qualquer pessoa pode estimar como a doença pode afetar seu próprio entorno.\n                        </p>\n                        <ul class=\"list-unstyled\">\n                            <li>\n                                <a [routerLink]=\"['/dash']\">Veja o simulador clicando aqui</a>\n                            </li>\n                            <!-- <li>\n                                <a href=\"#\">Encontre o IDH de seu bairro na tabela nacional clicando aqui</a>\n                            </li> -->\n                            <li>\n                                <a [routerLink]=\"['/aboutus']\">Saiba mais sobre o time Ação Covid-19 clicando aqui</a>\n                            </li>\n                        </ul>\n                        \n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">Um caso exemplar: Copacabana</h4>\n                        <p>\n                            O bairro da Zona Sul carioca é um epicentro das desigualdades sociais e urbanas do Brasil. Seu IDH é de 0,935, um dos mais altos do País. Mas esse desenvolvimento humano é a média entre o que se verifica \"no asfalto\" e o que se encontra \"no morro\". Enquanto a Praça Cardeal Arcoverde tem um IDH de 0,955 e uma densidade de 15 933 habitantes por quilômetro quadrado, a comunidade do Pavão-Pavãozinho, ali perto, tem IDH de 0,684, considerado mediano, e densidade habitacional de 25 845 habitantes por quilômetro quadrado.\n                        </p>\n                        <p>\n                            Além do Pavão-Pavãozinho, também são localizadas em Copacabana as comunidades do Cantagalo, Ladeira dos Tabajaras e Morro dos Cabritos. Por isso, Copacabana revela como um mesmo bairro pode ter duas curvas de contágio muito diferentes. Usando o simulador, descobrimos que as partes de Copacabana com IDH mais alto precisam de um isolamento de 80% (25% do total de pessoas infectadas em sete meses) da população para evitar o espalhamento descontrolado do novo coronavírus. Nas comunidades, o isolamento social necessário é bem maior: 92% (17% do total de pessoas infectadas em sete meses).\n                        </p>\n                        <p><a [routerLink]=\"['/copacabana']\">Saiba mais clicando aqui</a></p>\n                    </div>\n                    <div class=\"card\">\n                        <h4 class=\"text-center\">Como agir?</h4>\n                        <p>\n                            Manter as pessoas em casa não é uma tarefa fácil em lugar algum, mas é ainda mais difícil quando as condições de vida estão longe do ideal. O isolamento social exige coordenação de atores da esfera pública, lideranças comunitárias e setor privado. Esta coordenação é ainda mais necessária nas áreas em que o desenvolvimento humano, a densidade demográfica e o acesso a equipamentos públicos agravam o risco de espalhamento da doença.\n                        </p>\n                        <p>\n                            Listamos uma série de medidas que podem ser tomadas em todos os níveis da administração, do governo federal às lideranças locais, passando por Estados e municípios. Muitas dessas propostas são baseadas em práticas já adotadas por coletivos e líderes comunitários. Continuamos colhendo informações a partir de experiências bem-sucedidas, que podem ser replicadas por outras cidades e comunidades do país. \n                        </p>\n                        <p><a [routerLink]=\"['/howtoact']\">Clique aqui para conhecer as medidas</a></p>\n                    </div>\n                    <div class=\"card\">\n                        <h4>Redes sociais:</h4>\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"fb.me/AcaoCovid19\" target=\"_blank\">\n                                        <p><i class=\"fab fa-facebook-square fa-4x\"></i></p>\n                                        <p>Facebook</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://www.instagram.com/acao_covid/\" target=\"_blank\">\n                                        <p><i class=\"fab fa-instagram fa-4x\"></i></p>\n                                        <p>Instagram</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://twitter.com/AcaoCovid\" target=\"_blank\">\n                                        <p><i class=\"fab fa-twitter fa-4x\"></i></p>\n                                        <p>Twitter</p>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-3\">\n                                <div class=\"box-social-media\">\n                                    <a href=\"https://www.youtube.com/channel/UC8duZjIo2hNZpc36B9gyZSg/featured\" target=\"_blank\">\n                                        <p><i class=\"fab fa-youtube fa-4x\"></i></p>\n                                        <p>YouTube</p>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <cookie-law>\n                Usamos \"cookies\" (pequenos arquivos que identificam o seu aparelho) para melhorar a sua experiência no nosso site. Mais informações na nossa política de privacidade.\n            </cookie-law>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-to-act/how-to-act.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-to-act/how-to-act.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main howtoact\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Como Agir</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h3 class=\"text-center\">Do Bairro ao Palácio do Planalto: Medidas a Serem Tomadas no Combate ao Coronavírus</h3>\n                        <p>\n                            As medidas eficazes para combater a disseminação da Covid-19 são conhecidas: isolamento social, lockdown, testes em massa, uso de máscaras. Mas a profunda desigualdade social e econômica do Brasil torna a tarefa ainda mais complexa.\n                        </p>\n                        <p>\n                            O desafio de conter a doença, minimizando sua mortalidade, exige medidas integradas, com a cooperação de todas as esferas de poder, movimentos sociais, iniciativa privada e a população. Na ausência dessa coordenação, não restará alternativa senão o fechamento forçado e radical de muitas cidades: o chamado lockdown.\n                        </p>\n                        <p>\n                            Por isso, propomos uma série de medidas essenciais e urgentes, para evitar uma catástrofe sem precedentes na história recente do Brasil. O país caminha para se tornar o caso mais grave, no mundo, de resposta à Covid-19.\n                        </p>\n                        <p>\n                            O avanço do esforço urgente de reação à doença esbarra em sérios entraves. As recomendações com base científica têm sido alvo do descrédito de um dos atores cuja atuação seria mais necessária: o governo federal. A reiterada defesa de um isolamento exclusivo de idosos e outros grupos de risco, o chamado isolamento vertical, ignora a amplitude das pessoas em grupo de risco no país. A insistência na reabertura precoce de negócios e a ausência de plano organizado de isolamento comprometem a capacidade do Brasil para evitar os piores cenários possíveis da pandemia no país.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <img src=\"./assets/img/howtoact-piramide.png\" class=\"mx-auto d-block pyramid\">\n                        <h4>\n                            Movimentos sociais devem organizar-se de modo a pressionar por múltiplas ações: \n                        </h4>\n                        \n                        <ol type=\"A\">\n                            <li>Saúde:</li>\n                            <ul>\n                                <li><a href=\"https://www.saude.gov.br/noticias/agencia-saude/46540-saude-anuncia-orientacoes-para-evitar-a-disseminacao-do-coronavirus\" target=\"_blank\">Disseminar hábitos de prevenção</a> por meio de agentes e zeladores locais;</li>\n                                <li>Lavar as mãos, uso de máscaras, isolamento social;</li>\n                            </ul>\n                            <li>Economia:</li>\n                            <ul>\n                                <li>Identificação de domicílios vulneráveis, com dificuldade ou impedimento no recebimento do auxílio emergencial;</li>\n                                <li>Criar <a href=\"https://folhasantista.com.br/noticias/ativismo/forum-de-economia-solidaria-da-bs-lanca-manifesto-com-acoes-de-combate-ao-coronavirus/\" target=\"_blank\">redes de economia solidárias</a> locais com apoio do poder público;</li>\n                                <li><a href=\"https://www.politize.com.br/economia-solidaria-moeda-social-caso-de-palmas/\" target=\"_blank\">Moedas sociais impulsionadas pelos municípios;</a></li>\n                                <li><a href=\"https://www.institutobancopalmas.org/o-que-e-um-banco-comunitario\" target=\"_blank\">Bancos comunitários para apoio financeiro da comunidade;</a></li>\n                            </ul>\n                            <li>Serviços:</li>\n                            <ul>\n                                <li>Distribuição de insumos (<a href=\"http://site.sabesp.com.br/site/imprensa/noticias-detalhe.aspx?secaoId=65&id=8296\" target=\"_blank\">caixas d'água, água</a>, sabão, álcool gel);</li>\n                                <li>Organizar <a href=\"https://ny.curbed.com/2020/5/1/21243843/new-york-rent-strike-renters-tenants-landlords-rights\" target=\"_blank\">greve de aluguéis como nos EUA;</a></li>\n                                <li><a href=\"https://theintercept.com/2020/04/30/coronavirus-nova-york-greve-aluguel/\" target=\"_blank\">Suspensão de aluguéis;</a></li>\n                                <li><a href=\"https://maricainfo.com/2019/05/13/marica-idosos-poderao-ficar-isentos-do-pagamento-do-iptu.html\" target=\"_blank\">Suspensão de IPTU;</a></li>\n                            </ul>\n                            <li>Organização política em geral:</li>\n                            <ul>\n                                <li>Articular-se e pressionar o poder público (vídeos, abaixo assinados, manifestos, reuniões com autoridades);</li>\n                                <li>Pressionar pelo pagamento correto da renda básica emergencial; </li>\n                                <li>Mapear pessoas que não receberam a renda básica;</li>\n                                <li>Demandar manutenção da renda básica como direito;</li>\n                            </ul>\n                        </ol>\n                        \n                        <h4>Municípios:</h4>\n                        <ol type=\"A\">\n                            <li>Saúde:</li>\n                            <ul>\n                                <li><a href=\"https://www.brussels.be/masks\" target=\"_blank\">Adquirir e distribuir insumos para prevenção do COVID-19;</a></li>\n                                <li>Mobilizar <a href=\"https://www.statnews.com/2020/04/13/coronavirus-health-agencies-need-army-of-contact-tracers/\" target=\"_blank\">agentes comunitários de saúde para monitorar populações vulneráveis e traçar focos de contágio;</a></li>\n                                <li><a href=\"https://pesquisa.bvsalud.org/controlecancer/resource/pt/lis-LISBR1.1-47088\" target=\"_blank\">Delinear estratégias e ações para garantir a saúde mental</a> da população durante o confinamento; </li>\n                                <li>Proibição de tratamentos inseguros aos pacientes;</li>\n                                <li>Adquirir e distribuir EPI adequado para agentes funerários;</li>\n                                <li>Prevenir contaminação ambiental no processo de sepultamento;</li>\n                                <li>Implementar fila única para sepultamentos/cremações;</li>\n                            </ul>\n                            <li>Economia:</li>\n                            <ul>\n                                <li>Planejar e implementar mecanismos de moeda social, como a <a href=\"https://www.marica.rj.gov.br/2020/03/21/marica-tera-pacote-social-e-economico-contra-efeitos-do-coronavirus-de-r-80-milhoes/\" target=\"_blank\">Mumbuca de Maricá-RJl</a>;</li>\n                                <li>Tornar compras públicas de merenda <a href=\"https://www.marica.rj.gov.br/2020/04/05/prefeitura-divulga-cronograma-para-entrega-de-cestas-basicas/\" target=\"_blank\">cestas de alimentos para distribuição aos alunos da rede pública;</a></li>\n                                <li>Criar bancos locais de alimentos, <a target=\"_blank\" href=\"http://www2.itanhaem.sp.gov.br/2020/03/24/em-tempo-de-pandemia-banco-de-alimentos-recebe-doacoes-para-auxiliar-familias-carentes/\">como em Itanhaém-SP</a>;</li>\n                                <li><a href=\"http://www.setre.ba.gov.br/2020/04/2132/Covid-19-Setre-mobiliza-economia-solidaria-para-producao-de-EPIs.html\" target=\"_blank\">Apoiar as redes de Economia Solidária para produção de EPIs,</a> alimentos e geração de empregos;</li>\n                                <li>Criar <a href=\"https://www.pgcedc.com/covid-business-fund-2020\" target=\"_blank\">fundo de apoio financeiro para pequenos negócios;</a></li>\n                                <li>Criar <a href=\"https://www.calfund.org/covid-19/\" target=\"_blank\">fundo de apoio a pessoas em vulnerabilidade;</a></li>\n                            </ul>\n                            <li>Educação</li>\n                            <ul>\n                                <li>Expansão da rede <a href=\"https://campustechnology.com/articles/2020/04/30/where-to-get-free-wifi-for-students-during-covid19.aspx\" target=\"_blank\">wifi livre</a> para o acompanhamento das aulas pelos alunos da rede pública;</li>\n                                <li>Distribuição de computadores/tablets para estudantes, como em <a href=\"https://www.cbsnews.com/news/mcps-laptops-students-coronavirus-lockdown/\" target=\"_blank\">muitas cidades dos EUA</a>;</li>\n                            </ul>\n                            <li>Serviços</li>\n                            <ul>\n                                <li>Garantir o <a href=\"https://www.saopaulo.sp.gov.br/spnoticias/governo-do-estado-vai-distribuir-1-200-caixas-dagua-em-paraisopolis/\" target=\"_blank\">abastecimento de água potável </a>;</li>\n                                <li>Garantir moradia com <a href=\"https://neweconomics.org/2020/05/suspending-rents\" target=\"_blank\">suspensão de aluguéis</a> e <a href=\"https://maricainfo.com/2019/05/13/marica-idosos-poderao-ficar-isentos-do-pagamento-do-iptu.html\" target=\"_blank\">IPTU;</a></li>\n                                <li><a href=\"https://noticias.r7.com/sao-paulo/garantia-no-fornecimento-de-gas-e-ampliada-no-interior-de-sao-paulo-26032020\" target=\"_blank\">Garantir fornecimento de gás;</a></li>\n                                <li>Garantir fornecimento de <a href=\"https://www.hypeness.com.br/2020/03/covid-19-corte-de-energia-eletrica-por-falta-de-pagamento-e-suspenso-pela-aneel/\" target=\"_blank\">eletricidade</a>, internet;</li>\n                                <li>Remoção de populações em risco <a href=\"https://sf.curbed.com/2020/4/15/21221245/san-francisco-covid-coronavirus-hotels-homeless-sf\" target=\"_blank\">para hotéis, a exemplo de São Francisco (EUA);</a></li>\n                                <li>Garantir o <a href=\"https://www.cbsnews.com/news/coronavirus-pandemic-food-banks-us-unemployment-new-orleans/\" target=\"_blank\">fornecimento de alimentos para a população;</a></li>\n                            </ul>\n                            <li>Isolamento Social</li>\n                            <ul>\n                                <li>Definir e aplicar restrições de mobilidade;</li>\n                                <li>Definir e aplicar orientação e monitoramento para isolamento social;</li>\n                                <li>Considerar passe livre universal nos transportes coletivos municipais para trabalhadores essenciais (médicos, enfermeiros, etc).</li>\n                            </ul>\n                        </ol>\n                        \n                        <h4>Estados:</h4>\n                        <ol type=\"A\">\n                            <li>Saúde:</li>\n                            <ul>\n                                <li>Implementar fila única para leitos de UTI entre rede privada e pública;</li>\n                                <li>Subsidiar o desenvolvimento de<a target=\"_blank\" href=\"https://www.aljazeera.com/news/2020/04/senegal-trials-1-covid-19-test-kit-200428132313740.html&amp;sa=D&amp;ust=1589817939652000\"> testes rápidos e de baixo custo</a>;</li>\n                                <li>Mobilizar<a target=\"_blank\" href=\"https://www.statnews.com/2020/04/13/coronavirus-health-agencies-need-army-of-contact-tracers/&amp;sa=D&amp;ust=1589817939652000\"> agentes comunitários de saúde para monitorar populações vulneráveis e traçar focos de contágio</a>;</li>\n                                <li><a target=\"_blank\" href=\"https://pesquisa.bvsalud.org/controlecancer/resource/pt/lis-LISBR1.1-47088&amp;sa=D&amp;ust=1589817939653000\">Delinear estratégias e ações para garantir a saúde mental</a>;da população durante o confinamento;</li>\n                                <li><a target=\"_blank\" href=\"https://media.ford.com/content/fordmedia/fna/us/en/news/2020/04/13/ford-to-produce-respirators-masks-covid-19.html&amp;sa=D&amp;ust=1589817939653000\">Subsidiar o desenvolvimento de respiradores;</a></li>\n                                <li>Adquirir e distribuir EPI adequado para agentes funerários;</li>\n                                <li>Prevenir contaminação ambiental no processo de sepultamento;</li>\n                                <li>Implementar fila única para sepultamentos/cremações;</li>\n                            </ul>\n                            <li>Economia:</li>\n                            <ul>\n                                <li>Promover incentivos fiscais para produção de EPIs de uso hospital, e de uso comunitário para indústria têxtil; </li>\n                                <li>Promover incentivos fiscais para a produção de respiradores e equipamentos hospitalares open source </li>\n                                <li><a target=\"_blank\" href=\"https://www.bbc.com/portuguese/internacional-44020436&amp;sa=D&amp;ust=1589817939654000\">Aumentar o baixíssimo imposto sobre herança</a> ( atualmente entre 4% e 8%) </li>\n                                <li>Aplicá-lo em progressividade </li>\n                                <li>Criar linhas <a target=\"_blank\" href=\"https://www.es.gov.br/Noticia/covid-19-cartilha-reune-linhas-de-credito-emergencial&amp;sa=D&amp;ust=1589817939655000\">de crédito para pequenos e médios negócios</a> </li>\n                                <li>Criar políticas <a target=\"_blank\" href=\"https://qz.com/1840001/work-sharing-is-a-growing-alternative-to-layoffs-amid-covid-19/&amp;sa=D&amp;ust=1589817939655000\">de compartilhamento e proteção do emprego;</a> </li>\n                                <li>Aumentar a taxação de cigarros </li>\n                                <li>Aumentar taxação de alimentos altamente industrializados; </li>\n                                <li>Subsidiar produção de alimentos saudáveis (orgânicos) </li>\n                            </ul>\n                            <li>Educação:</li>\n                            <ul>\n                                <li>Criação de redes de apoio integrando a estudantes dos municípios;</li>\n                                <li>Agentes-tutores para auxiliar e acompanhar no processo de aulas e tarefas;</li>\n                                <li>Rever as datas de processos seletivos de ETECs e Universidades Estaduais;</li>\n                            </ul>\n                            <li>Serviços:</li>\n                            <ul>\n                                <li>Garantir o <a target=\"_blank\" href=\"https://www.saopaulo.sp.gov.br/spnoticias/governo-do-estado-vai-distribuir-1-200-caixas-dagua-em-paraisopolis/&amp;sa=D&amp;ust=1589817939656000\">abastecimento de água potável</a>; </li>\n                                <li>Garantir moradia com  <a target=\"_blank\" href=\"https://neweconomics.org/2020/05/suspending-rents&amp;sa=D&amp;ust=1589817939657000\">suspensão de aluguéis</a> e <a target=\"_blank\" href=\"https://maricainfo.com/2019/05/13/marica-idosos-poderao-ficar-isentos-do-pagamento-do-iptu.html&amp;sa=D&amp;ust=1589817939657000\">IPTU</a>;</li>\n                                <li><a target=\"_blank\" href=\"https://noticias.r7.com/sao-paulo/garantia-no-fornecimento-de-gas-e-ampliada-no-interior-de-sao-paulo-26032020&amp;sa=D&amp;ust=1589817939657000\">Garantir fornecimento de gás</a>;</li>\n                                <li>Garantir fornecimento de <a target=\"_blank\" href=\"https://www.hypeness.com.br/2020/03/covid-19-corte-de-energia-eletrica-por-falta-de-pagamento-e-suspenso-pela-aneel/&amp;sa=D&amp;ust=1589817939658000\">; eletricidade</a>, internet; </li>\n                                <li>Remoção de populações de rua ou em habitação precária <a target=\"_blank\" href=\"https://sf.curbed.com/2020/4/15/21221245/san-francisco-covid-coronavirus-hotels-homeless-sf&amp;sa=D&amp;ust=1589817939658000\">para hotéis, a exemplo de São Francisco (EUA);</a> </li>\n                                <li>Garantir o <a target=\"_blank\" href=\"https://www.cbsnews.com/news/coronavirus-pandemic-food-banks-us-unemployment-new-orleans/&amp;sa=D&amp;ust=1589817939659000\">; fornecimento de alimentos para a população;</a> </li>\n                            </ul>\n                            <li>Isolamento Social:</li>\n                            <ul>\n                                <li>Definir e aplicar restrições de mobilidade;</li>\n                                <li>Definir orientação e monitoramento para isolamento social;</li>\n                                <li> Considerar passe livre universal nos transportes coletivos municipais para trabalhadores essenciais (médicos, enfermeiros, etc);</li>\n                                <li>Cooperação com municípios para reduzir a circulação interestadual;</li>\n                            </ul>\n                        </ol>\n                        \n                        <h4>Governo Federal:</h4>\n                        <ol type=\"A\">\n                            <li>Saúde:</li>\n                            <ul>\n                                <li>Implementar <a target=\"_blank\" href=\"https://www.camara.leg.br/noticias/658677-projetos-criam-fila-unica-para-atender-pacientes-com-covid-19-em-utis-publicas-e-privadas/&amp;sa=D&amp;ust=1589817939660000\">fila única para leitos de UTI entre rede privada e pública;</a>;</li>\n                                <li>Subsidiar o desenvolvimento de testes rápidos;</li>\n                                <li>Subsidiar o desenvolvimento de respiradores e aparelhos hospitalares open source desenvolvidos por Instituições de Ensino e Pesquisa Brasileiras;</li>\n                                <li><a target=\"_blank\" href=\"https://www.forbes.com/sites/terinaallen/2020/05/17/will-the-senate-include-stimulus-checks-and-hazard-pay-in-next-relief-package/&amp;sa=D&amp;ust=1589817939661000\">Aumentar/agregar os adicionais de insalubridade e periculosidade aos salários de trabalhadores essenciais;</a></li>\n                            </ul>\n                            <li>Economia:</li>\n                            <ul>\n                                <li>Fortalecer política de renda básica emergencial;</li>\n                                <li>Eficiência no pagamento deste benefício;</li>\n                                <li>Fortalecer e criar políticas <a target=\"_blank\" href=\"https://qz.com/1840001/work-sharing-is-a-growing-alternative-to-layoffs-amid-covid-19/&amp;sa=D&amp;ust=1589817939661000\">de compartilhamento e proteção do emprego;</a></li>\n                                <li>Conversão de auxílios de parlamentares como: moradia, transporte, paletó, entre outros para subsidiar ação do COVID-19; </li>\n                                <li>Quebra de <a target=\"_blank\" href=\"https://www.uol.com.br/vivabem/noticias/redacao/2020/05/16/covid-19-lideres-mundiais-pedem-medicamentos-e-vacinas-sem-patentes.htm&amp;sa=D&amp;ust=1589817939662000\">patentes de medicamentos;</a></li>\n                                <li>Quebra de <a target=\"_blank\" href=\"https://uspirg.org/news/usp/advocates-say-remove-barriers-fixing-ventilators-other-covid-19-related-medical-equipment&amp;sa=D&amp;ust=1589817939662000\">patentes de respiradores defendendo o direito ao conserto;</a></li>\n                                <li>Fortalecer linhas de crédito para empresas com função social importante na crise;</li>\n                                <li>Decretar conversão industrial para produção e distribuição de EPIs, respiradores e aparelhos hospitalares;</li>\n                            </ul>\n                            \n                            <p><strong>Como criar espaço no orçamento para as medidas acima e outras ações de combate aos impactos da COVID-19?</strong></p>\n                            \n                            <ul>\n                                <li>Criar alíquotas maiores e <a target=\"_blank\" href=\"https://www12.senado.leg.br/noticias/materias/2019/02/15/projeto-da-bancada-do-pt-isenta-quem-ganha-ate-r-4.990-do-ir&amp;sa=D&amp;ust=1589817939663000\">mais progressivas de imposto de renda</a>;</li>\n                                <li>Implantar <a target=\"_blank\" href=\"https://noticias.uol.com.br/ultimas-noticias/afp/2020/04/13/imposto-sobre-grandes-fortunas-na-argentina-para-combater-a-covid-19.htm&amp;sa=D&amp;ust=1589817939664000\">o imposto sobre grandes fortunas</a>;</li>\n                                <li>Implantar imposto <a target=\"_blank\" href=\"https://noticias.uol.com.br/colunas/leonardo-sakamoto/2020/03/23/coronavirus-taxar-super-rico-trara-r-272-bi-contra-crise-dizem-entidades.htm&amp;sa=D&amp;ust=1589817939664000\">sobre lucros e dividendos;</a>;</li>\n                                <li>No caminho para a renda mínima permanente, implantar o <a target=\"_blank\" href=\"https://www.scielo.br/scielo.php?script%3Dsci_arttext%26pid%3DS0101-41612008000300006&amp;sa=D&amp;ust=1589817939665000\">imposto de renda negativo</a>;para os mais pobres, onde o governo os remunera ao invés de tributá-los;</li>\n                            </ul>\n                            \n                            <li>Educação</li>\n                            <ul>\n                                <li> <a href=\"https://agenciabrasil.ebc.com.br/educacao/noticia/2020-05/secundaristas-fazem-campanha-por-adiamento-do-enem&sa=D&ust=1589817939665000\">Adiamento do ENEM</a>;</li>\n                                <li>Equidade para os processos seletivos de vestibulares e do ENEM;</li>\n                                <li>Computadores e acesso à internet para todos alunos de universidades e escolas públicas;</li>\n                            </ul>\n                            \n                            <li>Serviços:</li>\n                            <ul>\n                                <li><a target=\"_blank\" href=\"http://conselho.saude.gov.br/16cns/assets/images/apresentacao/sobre_doc_orientador.pdf&amp;sa=D&amp;ust=1589817939666000\">Tirar o SUS da sua situação de subfinanciamento;</a></li>\n                                <li>Acesso universal e gratuito à futura vacina/tratamento;</li>\n                                <li><a target=\"_blank\" href=\"https://www.rollcall.com/2020/05/05/democrats-to-push-for-25-billion-for-postal-service-oversight-chairwoman-says/&amp;sa=D&amp;ust=1589817939666000\">Programa de fortalecimento dos correios</a>;</li>\n                                <li>Investimento em testes;</li>\n                            </ul>\n                            \n                            <li>Isolamento Social</li>\n                            <ul>\n                                <li>Reconhecer a importância da quarentena/lockdown;</li>\n                                <li>Garantir que estados tenham condição de manter isolamento.</li>\n                            </ul>\n                            <li>Violência Doméstica e Segurança:</li>\n                            <ul>\n                                <li><a target=\"_blank\" href=\"https://www1.folha.uol.com.br/mundo/2020/05/liberacao-de-presos-devido-a-covid-19-ameaca-lua-de-mel-de-fernandez-e-argentina.shtml\">Prover as condições de transferir detentos que cometeram delitos leves ou não violentos para prisão domiciliar;</a></li>\n                                <li>Serviço de plantão para denúncia de violência doméstica;</li>\n                            </ul>\n                            <li>Cooperação Internacional:</li>\n                            <ul>\n                                <li>Rever <a target=\"_blank\" href=\"https://www1.folha.uol.com.br/mundo/2020/04/brasil-segue-eua-e-deixa-de-apoiar-medida-da-onu-de-cooperacao-contra-coronavirus.shtml&amp;sa=D&amp;ust=1589817939667000\">posição antagônica à resolução da ONU</a>;por multilateralismo e acesso equitativo a remédios e tratamento;</li>\n                                <li>Construir em cooperação sistema de segurança sanitária que monitore vírus que possam se tornar pandemias;</li>\n                                <li>Impor fortes regulamentações ao <a target=\"_blank\" href=\"https://editoraelefante.com.br/o-nosso-modo-de-vida-virulento/&amp;sa=D&amp;ust=1589817939668000\">extrativismo e ao agronegócio que são comprovadamente setores críticos que &nbsp;aumentam o potencial de pandemias</a></li>\n                            </ul>\n                        </ol>\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/howtouse/howtouse.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/howtouse/howtouse.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main howtouse\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Como usar</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h3>Como usar o MD Corona?</h3>\n                        <p>\n                            O botão <strong>RESETAR</strong> recomeça os gráficos e distribui aleatoriamente o número de pessoas (definida pela densidade populacional). Todas as pessoas, exceto uma, são consideradas saudáveis e suscetíveis ao vírus e definidas com a cor verde. O programa fixa 1 pessoa inicialmente infectada que é definida pela cor vermelha. Todas as pessoas são distribuídas com idades aleatoriamente. \n                        </p>\n                        <p>\n                            O botão <strong>INICIAR/PARAR</strong> inicia a simulação e os gráficos e também para a simulação.\n                        </p>\n                    </div>\n                    <div class=\"card\">\n                        <h3>Como ele funciona</h3>\n                        <p>O simulador é iniciado com 3 parâmetros: </p>\n                        \n                        <ul>\n                            <li>Densidade Populacional</li>\n                            <li>IDH (Índice de Desenvolvimento Humano) ou Índice de Vulnerabilidade ao Covid-19 (IVC)</li>\n                            <li>Letalidade</li>\n                        </ul>\n                        \n                        <p>A densidade populacional (mínimo 3.400 hab/km² e máximo 34.000 hab/km²) é convertida pelo modelo em número de pessoas que estarão distribuídas aleatoriamente no ambiente. </p>\n                        \n                        <p>\n                            Entre essas pessoas uma está infectada desde o início. O IDH/ICV tem 4 escalas (baixo, médio, médio-alto, alto) e é uma medida da vulnerabilidade do local. Os valores devem ser consultados na tabela. O modelo traduz cada elemento da escala em uma probabilidade efetiva de transmissão pessoa-a-pessoa, definida pela calibração com a cidade de Nova York como sendo: baixo = 61%, médio = 59%, médio-alto = 57%, e alto = 55%. \n                        </p>\n                        \n                        <p>\n                            Por fim, a letalidade é traduzida em chance de recuperação, que possui dois níveis: alto=99% e baixo=98%. Sendo o primeiro definido pela calibração.\n                        </p>\n                        \n                        <p>\n                            No modelo a escala de tempo é em dias e cada rodada equivale a um dia. As pessoas podem mover-se aleatoriamente nesse mundo (o quadrado preto) estando em um dos três estados:\n                        </p>\n                        <ul>\n                            <li>saudável mas suscetível a ser contaminado pelo vírus (verde)</li>\n                            <li>infectadas e transmitindo o vírus (vermelho)</li>\n                            <li>saudáveis e imunes (cinza)</li>\n                        </ul>\n                        \n                        <p>\n                            O parâmetro <strong>CONFINAMENTO</strong> permite parar uma porcentagem das pessoas no ambiente, o que reduz a velocidade da transmissão. Ele é dinâmico, ou seja, pode ser alterado durante a simulação sem a necessidade de resetar o simulador, como ocorre quando modificamos os demais parâmetros. \n                        </p>\n                        <p>\n                            No modelo as pessoas morrem de infecção ou de idade (75 anos). Quando a população cai abaixo da \"capacidade máxima\" do ambiente (fixa em 1200 neste modelo), pessoas saudáveis podem produzir descendentes saudáveis (mas suscetíveis à contaminação). \n                            Outro fator importante é a introdução, a cada 90 dias, de um agente infectado pelo vírus, o que acabou por tornar o ambiente do modelo aberto e mais condizente com a realidade\n                            \n                        </p>\n                        <p>\n                            Duração da janela de transmissão. Quanto tempo uma pessoa fica infectada antes de se recuperar ou morrer? Esse período de tempo é essencialmente a janela de oportunidade do vírus para transmissão para novos hospedeiros. Neste modelo, a duração da janela de transmissão é fixa em 18 dias.\n                        </p>\n                        <p>\n                            Quatro monitores (quadros amarelos) de saída mostram a porcentagem da população infectada, a porcentagem de pessoas imunes ao vírus, a porcentagem de mortos e o número de dias que se passaram. O gráfico mostra (em suas respectivas cores) o número de pessoas infectadas e imunes. \n                        </p>\n                    </div>\n                    <div class=\"card\">\n                        <h3>O que é isso?</h3>\n                        <p>A construção desse modelo foi inspirada pelo sucesso da divulgação do estudo desenvolvido por Harry Stevens e publicado na página do jornal Washington Post dia 14 de Março de 2020 (<a href=\"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/\" target=\"_blank\">https://www.washingtonpost.com/graphics/2020/world/corona-simulator/</a>) onde o autor explora diferentes cenarios de atenuação e supressão social para conter o avanço do coronavírus. </p>\n                        <p>Para a construção do Modelo de Dispersão do Coronavírus (MD Corona), modificamos o modelo original Vírus (Wilensky, 1998) presente na biblioteca do software livre NetLogo (Wilensky, 1999). O modelo original foi inspirado pelo artigo de Yorke et al (1979) em que biólogos ecologistas sugeriram um número de fatores que poderiam influenciar a sobrevivência de um vírus com transmissão direta entre uma população. As modificações específicas que fazem parte do MD Corona serão destacadas abaixo.</p>\n                        \n                        <h3>\n                            Como Citar\n                        </h3>\n                        <p>\n                            Se você mencionar este modelo ou o software NetLogo numa publicação, pedimos para que inclua as citações abaixo:\n                        </p>\n                        <p>Para o modelo Virus:</p>\n                        <ul>\n                            <li>\n                                Wilensky, U. (1998).  NetLogo Virus model.  http://ccl.northwestern.edu/netlogo/models/Virus.  Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.\n                            </li>\n                        </ul>\n                        <p>\n                            Para o modelo MD Corona:\n                        </p>\n                        <ul>\n                            <li>Guedes Pinto, José Paulo; Magalhães, Patrícia; Santos Carlos Silva. (2020). Modelo de Dispersão Comunitária Coronavírus (MD Corona), Universidade Federal do ABC, São Bernardo do Campo, Brasil.</li>\n                        </ul>\n                        <p>\n                            Por favor cite o software NetLogo como:\n                        </p>\n                        <ul>\n                            <li>\n                                Wilensky, U. (1999). NetLogo. http://ccl.northwestern.edu/netlogo/. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"card\">\n                        <h3>Copyright and License</h3>\n                        <p>Copyright 2020 José Paulo Guedes Pinto, Patrícia Camargo Magalhães, Carlos da Silva dos Santos </p>\n                        <p>![CC BY-NC-SA 3.0](http://ccl.northwestern.edu/images/creativecommons/byncsa.png)</p>\n                        \n                        <p>Copyright 1998 Uri Wilensky.</p>\n                        \n                        <p>![CC BY-NC-SA 3.0](http://ccl.northwestern.edu/images/creativecommons/byncsa.png)</p>\n                        \n                        <p>Esse trabalho está sob a licença Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License. Para ver uma cópia dessa licença visite: https://creativecommons.org/licenses/by-nc-sa/3.0/ or send a letter to Creative Commons, 559 Nathan Abbott Way, Stanford, California 94305, USA.</p>\n                        \n                        <p>Licenças comercial também estão disponíveis. Para indagar sobre isso, favor contactar Uri Wilensky at uri@northwestern.edu.</p>\n                        \n                        <p>O modelo MD Corona foi criado para gerar dados para o working paper \"Simulando a evolução da transmissão comunitária do coronavírus através do Modelo M D Corona.\" de autoria de José Paulo Guedes Pinto, Patrícia Magalhães e Carlos da Silva Santos. 2020.</p>\n                        \n                        <p>This model was created as part of the project: CONNECTED MATHEMATICS: MAKING SENSE OF COMPLEX PHENOMENA THROUGH BUILDING OBJECT-BASED PARALLEL MODELS (OBPML). The project gratefully acknowledges the support of the National Science Foundation (Applications of Advanced Technologies Program) -- grant numbers RED #9552950 and REC #9632612.</p>\n                        \n                        <p>This model was converted to NetLogo as part of the projects: PARTICIPATORY SIMULATIONS: NETWORK-BASED DESIGN FOR SYSTEMS LEARNING IN CLASSROOMS and/or INTEGRATED SIMULATION AND MODELING ENVIRONMENT. The project gratefully acknowledges the support of the National Science Foundation (REPP & ROLE programs) -- grant numbers REC #9814682 and REC-0126227. Converted from StarLogoT to NetLogo, 2001. (1998-2020)</p>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/methodology/methodology.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/methodology/methodology.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main methodology\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Metolodogia</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"article\">\n                        \n                        <div class=\"card\">\n                            <h4>Metodologia e calibração do Modelo de Dispersão do Coronavírus (MD Corona)</h4>\n                            <h5>Sobre o modelo:</h5>\n                            <p>\n                                O modelo simula no ambiente Netlogo a dispersão do coronavírus numa localidade, a partir de variáveis complexas multiagentes. Esse modelo é a versão 2.0 do MD Corona, que por sua vez foi inspirado no modelo original Vírus (Wilensky, 1998) presente na biblioteca do software livre NetLogo (Wilensky, 1999). \n                            </p>\n                            <p>\n                                A dinâmica de deslocamento da população no ambiente é aleatória e se dá em pontos de uma grade contendo um total de 41 x 41 pontos (1681 pontos). A transmissão do vírus depende do encontro de duas pessoas numa vizinhança de von Neumann da grade (sendo que elas podem estar contaminadas, imunes ou suscetíveis a contrair o vírus) e da probabilidade efetiva de contaminação. \n                            </p>\n                            <p>\n                                O modelo tem a opção de confinar entre 0 e 100% da população no ambiente de maneira dinâmica, ou seja, é possível mudar a quantidade de pessoas que ficam paradas durante uma simulação. Tal ferramenta permite estudar, por exemplo, as consequências para a dinâmica de desenvolvimento da curva epidêmica ao se modificar o grau de confinamento da população. \n                            </p>\n                            <p>\n                                A probabilidade efetiva de contaminação para um dado número de pessoas na grade está diretamente associada à velocidade de crescimento da curva. Quanto mais os encontros resultarem em novas contaminações, mais acentuada será a curva. Este parâmetro seria análogo ao chamado coeficiente ß nos modelos baseados em equações diferenciais múltiplas S.I.R. ou S.E.I.R. Nesses modelos o ß é definido como a taxa de transmissão do vírus e é uma medida da capacidade de replicação do vírus, ou seja, a razão em que uma pessoa contamina outras.  \n                            </p>\n                            <p>\n                                Muitos fatores influenciam a velocidade com que o vírus se espalha numa localidade. O uso de máscaras e procedimentos de higiene, por exemplo, são as principais formas de reduzir a transmissão. Mas também as condições de saúde, saneamento básico e urbanização da localidade são importantes e podem refletir a eficácia da implementação das medidas de higiene e distanciamento social recomendados. A quantificação desses fatores é subjetiva e é parametrizada no simulador pela probabilidade efetiva de transmissão a qual relacionamos diretamente com dois fatores: o Índice de desenvolvimento Humano (IDH) ou o IPC Índice de Proteção ao Coronavírus (IPC). O último foi desenvolvido pelo nosso coletivo (Ação Covid-19) e inclui indicadores sociais e territoriais, tornando-o mais completo do que o IDH. \n                            </p>\n                            <p>\n                                No nosso modelo o parâmetro probabilidade de transmissão foi calibrado para a cidade de Nova York nos EUA (baixa probabilidade de transmissão e IDH e IPC muito altos). A calibração permitiu estabelecer uma escala entre diferentes probabilidades de transmissão e diferentes níveis de IDH ou IPC (IBGE, 2020) - quanto menor o IDH ou IPC, maior a chance de se transmitir o vírus num encontro pessoa-a-pessoa. \n                            </p>\n                            <p>\n                                O parâmetro letalidade não influencia a curva de transmissão, mas a quantidade de mortos. É também um parâmetro efetivo que inclui fatores socioculturais, etário, condições de saúde, mas principalmente o acesso ao tratamento adequado, com hospitais capacitados e com espaço para receber as pessoas dessa localidade. No mundo ocidental a estimativa é que a letalidade da COVID-19 esteja abaixo de 1% das pessoas contaminadas pelo novo coronavírus (Dorigatti et al., 2020), sendo 0,6% em Londres. A precisão deste número depende fortemente da capacidade de testes, pois é preciso saber a totalidade dos portadores do vírus, mesmo que estejam assintomáticos. No Modelo MD Corona o parâmetro letalidade tem duas possibilidades para descrever diferentes cenários: respectivamente  1% e 2%. Tais números foram definidos pela calibragem do modelo usando a cidade de Nova York (1%) e Guayaquil (2%) como exemplos. \n                            </p>\n                            <p>\n                                Os demais parâmetros fixos no modelo são: o período de transmissão do vírus, o tempo de imunidade, o número de contaminados iniciais e o número total de pessoas na grade. \n                            </p>\n                            <p>\n                                O período de transmissão está fixo em 18 dias. Esse valor está  embasado no ciclo de transmissão do vírus para diferentes níveis de contaminação e desenvolvimento de sintomas da doença COVID-19. O número 18 foi obtido à partir da média ponderada do tempo do ciclo viral (em média) em cada tipo de reação ao vírus. Sabe-se que em média 30% das pessoas contaminadas são assintomáticas e transmitem em média o vírus por 14 dias, 55% apresentam sintomas leves com um período de transmissão médio de 21 dias e que 15% das pessoas apresentam sintomas graves e críticos e possuem em média um ciclo de 25 dias de transmissão. Ainda assim, segundo estudos (He et al., 2020) o ciclo do vírus pode chegar (em uma minoria) a até 39 dias.\n                            </p>\n                            <figure>\n                                <br>\n                                <img src=\"./assets/img/methodology/methodology_001.png\" class=\"mx-auto d-block methodology-vertical\">\n                                <br>\n                                <figcaption class=\"figure-caption text-center\">\n                                    Figura 1: Infográfico retirado de estudo sobre a janela de transmissão ao vírus como função dos sintomas a Covid-19. (Lu et al., 2020)\n                                </figcaption>\n                            </figure>\n                            <p>\n                                Quanto ao parâmetro imunidade ao vírus, não existem ainda dados concretos para definir o tempo de imunidade das pessoas que sobreviveram ao vírus. Estudos recentes indicam que não houve reinfecção ao vírus como foi sugerido anteriormente (Sales, 2020). Alguns pesquisadores acreditam que o tempo de mutação das cepas do vírus é longo o bastante para se produzir uma vacina (Serrano, 2020). Sabemos que o coronavírus é um vírus cujas cepas devem sofrer mutações (assim como a Influenza H1N1), mas não temos ainda dados para definir se a escala de tempo é de poucos meses ou de um ano (Zhou et al., 2020; Li et al., 2020). As experiências com a Gripe Influenza H1N1, por exemplo, sugerem uma imunidade de 1 ano. Nesta versão do modelo optamos por deixar a imunidade dos agentes fixa em um ano (365 dias, ou rodadas).\n                                \n                            </p>\n                            <p>\n                                A densidade populacional é um parâmetro extremamente importante no modelo. Ela afeta a frequência de contato entre as pessoas no ambiente e consequentemente a possibilidade de transmissão do vírus entre infectados e saudáveis. O número de pessoas na grade é variável o que permite investigar diferentes densidades demográficas. A calibragem entre o número de pessoas na grade do modelo e a densidade demográfica real das localidades que aparece no simulador (em habitantes/km²) foi feita usando a cidade de Nova York. Outro parâmetro é o número de infectados iniciais. Ele define a quantidade de focos que o vírus terá no ambiente quando se inicia o contágio. No nosso modelo ele é fixo em 1 pessoa independente do número total de pessoas na grade. Um característica importante é a introdução de um agente infectado pelo vírus no ambiente a cada 90 rodadas (dias). Isso torna o ambiente do modelo aberto e mais condizente com a realidade de circulação do vírus entre diferentes territórios. \n                            </p>\n                            <p>\n                                Por fim, o parâmetro mais importante do Modelo é o confinamento dinâmico. A OMS, em esforço conjunto com cientistas e a classe médica, vem buscando conscientizar o mundo desde o começo da pandemia que uma das melhores e mais eficazes formas de interromper ou reduzir o contágio por transmissão comunitária é o <strong>confinamento social restritivo</strong>, prática aplicada na maioria das cidades atingidas pelo vírus no mundo. No entanto, temos presenciado resistência em alguns países, em particular o Brasil, devido a pressões de grupos empresariais com medo da recessão que virá. A partir do confinamento dinâmico, podemos simular como muda a curva de dispersão do vírus em diferentes situações de reclusão durante a mesma simulação, para diferentes localidades. Ou seja, o confinamento dinâmico permite contar uma história de evolução do vírus para diferentes localidades. Uma vez fixada a localidade em que se deseja simular a dispersão do vírus, todos os parâmetros do modelo estarão fixos pela calibração, menos o confinamento, que estará livre para o usuário poder modifica-lá.\n                            </p>\n                        </div>\n                        <div class=\"card\">\n                            <h5>Objetivo do Simulador</h5>\n                            <p>\n                                Antes de discutir como calibrar o modelo com exemplos reais é preciso enfatizar a finalidade principal do simulador. O enfoque deste estudo é fornecer uma ferramenta com a qual as pessoas possam simular a curva de dispersão do coronavírus em seus bairros e comunidades conectados aos grandes centros urbanos. Portanto, queremos descrever a dinâmica da dispersão em locais com média, alta e altíssima densidade populacional. Essa informação é relevante pois o modelo, uma vez calibrado, não consegue descrever simultaneamente a dinâmica da dispersão em cidades com baixíssima densidade demográfica e grandes aglomerados urbanos como as comunidades no Rio de Janeiro que chegam a ter 44 mil hab/km². A escala acessível será definida pela calibração.\n                            </p>\n                            <br>\n                            \n                            <h5>Como  funciona o Modelo</h5>\n                            <p>\n                                Antes de ser iniciado, o usuário deve definir 3 parâmetros: densidade populacional, nível do IDH (ou IPC) e letalidade. A densidade populacional (mínimo 3400 hab/Km2 e máximo 34000 hab/Km^2) é convertida pelo modelo em número de pessoas que estarão distribuídas aleatoriamente no ambiente. Entre essas pessoas uma está infectada desde o início.  O IDH (Índice de desenvolvimento Humano) ou IPC (Índice de Proteção ao Coronavírus) são classificados dentro de 5 níveis de acordo com a escala abaixo (muito alto, alto,  médio, baixo,  muito baixo), que mede a vulnerabilidade do local. \n                            </p>\n                            \n                            <figure>\n                                <br>\n                                <img src=\"./assets/img/methodology/methodology_002.png\" class=\"mx-auto d-block methodology-img\">\n                                <br>\n                                <figcaption class=\"figure-caption text-center\">\n                                    Figura 2. Simulador do MD Corona V 2.2.\n                                </figcaption>\n                            </figure>\n                            \n                            <br>\n                            <p>\n                                Antes de ser iniciado, o usuário deve definir 3 parâmetros: densidade populacional, nível do IDH (ou IPC) e letalidade. A densidade populacional (mínimo 3400 hab/Km2 e máximo 34000 hab/Km^2) é convertida pelo modelo em número de pessoas que estarão distribuídas aleatoriamente no ambiente. Entre essas pessoas uma está infectada desde o início.  O IDH (Índice de desenvolvimento Humano) ou IPC (Índice de Proteção ao Coronavírus) são classificados dentro de 5 níveis de acordo com a escala abaixo (muito alto, alto,  médio, baixo,  muito baixo), que mede a vulnerabilidade do local. \n                            </p>\n                            \n                            <figure>\n                                <br>\n                                <img src=\"./assets/img/methodology/methodology_003.jpg\" class=\"mx-auto d-block methodology-img\">\n                                <br>\n                                <figcaption class=\"figure-caption text-center\">\n                                    Figura 3. Faixas do IDH\n                                </figcaption>\n                            </figure> \n                            \n                            <p>\n                                O modelo traduz cada elemento da escala em uma probabilidade efetiva de transmissão (quanto maior o IDH, menor a chance de transmissão) definida pela calibração do modelo com a cidade de Nova York. Se o IDH for definido como muito alto, a chance de transmissão de cada contatos entre pessoas é de 55%; se for definido como alto, 57%; médio, 59%; baixo, 61% e muito baixo, 63%. \n                            </p>\n                            <p>\n                                Por fim, a letalidade possui dois níveis: 1% e 2%. Sendo o primeiro definido pela calibração de Nova York e o segundo para reproduzir condições de mortalidades mais elevadas como as observadas em Guayaquil.\n                            </p>\n                            <p>\n                                No modelo a escala de tempo é em dias e cada rodada equivale a um dia. As pessoas podem mover-se (ou não, a depender do confinamento) aleatoriamente nesse mundo (o quadrado preto) estando em um dos três estados:\n                            </p>\n                            \n                            <ol type=\"a\">\n                                <li>\n                                    Saudável mas suscetível a ser contaminado pelo vírus <span style=\"background-color: rgb(117, 249,76); color: black;\"> (verde) </span>\n                                </li>\n                                <li>\n                                    Infectadas e transmitindo o vírus <span style=\"background-color: rgb(188, 38,26); color: white;\">  (vermelho) </span>\n                                </li>\n                                <li>\n                                    Saudáveis e imunes <span style=\"background-color: rgb(244, 244,244); color: black;\"> (cinza) </span>\n                                </li>\n                            </ol>\n                            <p>\n                                O parâmetro confinamento permite parar uma porcentagem das pessoas no ambiente, o que reduz a velocidade da transmissão. Ele é dinâmico, ou seja, pode ser alterado durante a simulação sem a necessidade de resetar o simulador,  como ocorre quando modificamos os demais parâmetros. \n                            </p>\n                            <p>\n                                No modelo as pessoas morrem de infecção ou de idade (75 anos). Quando a população cai abaixo da \"capacidade máxima\" do ambiente (fixa em 1200 neste modelo), pessoas saudáveis podem produzir descendentes saudáveis (mas suscetíveis à contaminação). Outro fator importante é a introdução, a cada 90 dias, de um agente infectado pelo vírus, o que acabou por tornar o ambiente do modelo aberto e mais condizente com a realidade. \n                            </p>\n                            <p>\n                                Por fim, por ser um modelo dinâmico ele é dependente das condições iniciais o portanto, é recomendado que as simulações sejam repetidas para se observar o padrão. DISCLAIM: O modelo não está calibrado para baixas densidades populacionais. Com poucas pessoas no ambiente a dinâmica de transmissão do vírus (calibrada para Nova York) não consegue descrever muito bem o que de fato ocorre.\n                            </p>\n                        </div>\n                        <div class=\"card\">\n                            <h5>Calibração do Modelo</h5>\n                            <p>\n                                Para tornar o modelo mais robusto é importante estabelecer uma relação entre o número de pessoas na grade e a densidade demográfica de uma localidade específica. No entanto, para calibrar a dinâmica do modelo com a dinâmica observada na localidade específica é preciso notar que o modelo gera uma curva de transmissão com sintomáticos e assintomáticos, sendo os últimos em maior proporção (OMS fala em 80%) mas que geralmente estão excluídos dos dados de testes de contaminados. Uma vez que sem sintomas raramente as pessoas ficam sabendo que foram contaminadas. A alternativa é utilizar resultados de estudos de imunidade ao vírus que são feitos de forma aleatórias dentro em uma população. Esses exames detectam a presença dos anticorpos IGG produzidos por pessoas que foram contaminadas pelo vírus SARS-CoV-2 há pelo menos 20 dias. Caso a pesquisa tenha sido feita de maneira satisfatória (estatística e metodologicamente) esse dado se torna uma medida mais realística da porcentagem total de infectados numa localidade. Se somarmos a isso o registro sobre a história da pandemia na cidade, com datas do primeiro caso e das medidas que resultaram em confinamento social parcial e/ou total, podemos usar o modelo para reproduzir a mesma dinâmica e fixar uma relação entre a densidade da localidade com o número de pessoas na grade e o IDH com a probabilidade de transmissão efetiva.\n                            </p>\n                            <p>\n                                O caso de Nova York (NY) nos EUA  é exemplar nesse sentido. Possui um alto IDH de 0,94 e registrou 24,7% de imunizados no dia 22 de Abril em um estudo com 7500 testes de sorologia em diferentes cidades do estado de Nova York (NY Times, 2020a). Para calibragem do modelo usamos as informações de medidas oficiais de redução da mobilidade social adotadas pelo governo local, a qual traduzimos em diferentes porcentagens de confinamento no nosso modelo. As respectivas datas e medidas estão resumidas na tabela abaixo. É importante notar que os dados de confinamento são aproximados. Em uma segunda etapa  da calibragem a letalidade do vírus fixada de modo a descrever os dados de mortes por casos da cidade de Nova York.\n                            </p>\n                            <br>\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered table-striped\">\n                                    <caption>Tabela 1: Resumo das medidas de Nova York (densidade 10947 ha/Km^2, IDH: 0,94).   (NY Times, 2020; Governor NY, 2020)</caption>\n                                    <thead>\n                                        <tr class=\"text-center\"> \n                                            <th>Data</th>\n                                            <th>Dados</th>\n                                            <th>Modelo</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>14/02</td>\n                                            <td>1º caso (meados de fevereiro)</td>\n                                            <td>Dia 1: 0% de confinamento</td>\n                                        </tr>\n                                        <tr>\n                                            <td>16/03</td>\n                                            <td>(acúmulo de medidas) fechamento de escolas, Universidades, isolamento voluntário e distância social</td>\n                                            <td>Dia 32 -  40% de confinamento. Esse dado foi estimado com base na experiência da cidade de São Paulo.</td>\n                                        </tr>\n                                        <tr>\n                                            <td>22/03</td>\n                                            <td>Lockdown (multa e força)</td>\n                                            <td>Dia 38 -  80% de pessoas confinadas.</td>\n                                        </tr>\n                                        <tr>\n                                            <td>22/04</td>\n                                            <td>25% da população contaminada</td>\n                                            <td>Dia 54 - Fim da simulação com 25% de infectados</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"card\">\n                            <h5>Metodologia de Calibragem</h5>\n                            <p>\n                                Para além dos parâmetros fixos inerentes ao modelo, discutidos acima, os parâmetros que influenciam diretamente a curva de transmissão do vírus são o número de pessoas na grade e a probabilidade de contaminação a cada encontro. Considerando que NY tem uma densidade populacional média e queremos poder simular localidades com densidades ao menos 3 vezes maior, é interessante focalizar o número de pessoas em torno de 400, para um universo total de 1200 pessoas. Desta forma, com o roteiro estabelecido na Tabela(Box1), variamos a combinação número de pessoas e a probabilidade de transmissão até conseguir reproduzir a história de NY consistente com 24,7% de infectados após 54 dias. É intrínseco aos modelos complexos de multiagentes uma sensibilidade as condições iniciais. Isso foi minimizado com uma repetição sistemática com mil (10 vezes  de 100) simulações. \n                            </p>\n                            \n                            <figure>\n                                <br>\n                                <img src=\"./assets/img/methodology/methodology_004.png\" class=\"mx-auto d-block methodology-img\">\n                                <br>\n                                <figcaption class=\"figure-caption text-center\">\n                                    Figura 4:  Resultado para 100 simulações com os parâmetros da tabela 3, gerando 25,24% de infectados pelo Vírus. A curva azul é a curva média de todas as simulações. A laranja é a média da imunidade. \n                                </figcaption>\n                            </figure> \n                            \n                            <p>\n                                A Figura 4 confirma a variância dos resultados do simulador para um conjunto de 100 simulações com os mesmos parâmetros iniciais. No entanto a curva média satisfaz a calibração de NYC. \n                                Para confirmar que o resultado é de fato consistente com 24,7% obtido pelo estudo de NY, repetimos 10 vezes o conjunto de 100 simulações e obtivemos o valor de 25,21% com um desvio padrão de 0,87%.  O valores estão na Tabela 2.\n                            </p>\n                            <p>\n                                Na tabela 2 mostramos os valores dos parâmetros definidos pela calibragem na qual obtivemos 384 pessoas na grade com uma probabilidade de transmissão de 58%. \n                            </p>\n                            \n                            <div class=\"table-responsive\">\n                                <table class=\"table table-bordered table-striped text-center\">\n                                    <caption>Tabela 2: Resultado da calibração do modelo com a cidade de Nova York.</caption>\n                                    <thead>\n                                        <tr> \n                                            <th>Num. Pessoas</th>\n                                            <th>Probabilidade de transmissão</th>\n                                            <th>Letalidade</th>\n                                            <th>Conversão Densidade para num de pessoas</th>\n                                            <th>% de infectados</th>\n                                            <th>Letalidade</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>384</td>\n                                            <td>58%</td>\n                                            <td>1%</td>\n                                            <td>0,03531</td>\n                                            <td>25,21 (87)</td>\n                                            <td>0,07</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <p>\n                                A calibração define a densidade do modelo em relação a densidade populacional de NY. Com 384 pessoas em uma grade de 1681 pontos, podemos estabelecer que a densidade de NY 10947 hab./Km <sup>2</sup> corresponde a um fator de densidade do modelo de  0.23 pessoas/pontos <sup>2</sup>. Isso estabelece a régua para conversão de densidades demográficas de localidades para pessoas no simulador:\n                            </p>\n                            <p class=\"text-center equation\">\n                                N&ordm; de pessoas da grade = densidade demográfica x 0,035.  \n                            </p>\n                            <p>\n                                A régua também define limites máximos (34000 hab/km²) e mínimos (3400 hab/km²) para a simulação, dado o número de pessoas na grade. Para densidades maiores que o máximo recomendamos que o usuário coloque o slider da densidade no máximo, pois a dinâmica de transmissão será próxima. Para localidades com densidades menores que o mínimo o modelo não é preciso. \n                            </p>\n                            \n                            <figure>\n                                <br>\n                                <img src=\"./assets/img/methodology/methodology_005.png\" class=\"mx-auto d-block methodology-img\">\n                                <br>\n                                <figcaption class=\"figure-caption text-center\">\n                                    Figura 5. Tipos de vizinhanças bidimensionais\n                                </figcaption>\n                            </figure> \n                            \n                            <hr>\n                            <div class=\"footer-notes\">\n                                \n                                <p>\n                                    <sup>1</sup> \n                                    <small>\n                                        Os tipos de vizinhanças bidimensionais mais estudadas são a vizinhança de von Neumann, que considera as células imediatamente associadas à célula central, e vizinhança de Moore que considera todas as células vizinhas da célula central (exemplificadas na figura 1 ao final). Como na evolução dos agentes bidimensionais a vizinhança é formada por um plano, as regras de transição também deverão considerar esse espaço bidimensional.\n                                    </small>\n                                </p>\n                                <p>\n                                    <sup>2</sup>\n                                    <small> \n                                        Diferente da transmissão local – casos de pessoas que tiveram contato com outro paciente infectado que trouxe o vírus de fora do país – a transmissão comunitária são casos de transmissão do vírus entre a população local, sem que nenhuma das pessoas tenha viajado.\n                                    </small>\n                                </p>\n                                <p>\n                                    <sup>3</sup>\n                                    <small>\n                                        Os valores de IPC e IDH podem ser consultados na tabela ao lado do Simulador.\n                                    </small>\n                                </p>\n                                <p>\n                                    <sup>4</sup>\n                                    <small>\n                                        Estamos buscando desenvolver uma nova calibragem ao modelo para densidades mais baixas.\n                                    </small>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"card\">\n                            <h5>Referências</h5>\n                            \n                            <p>IBGE. Instituto Brasileiro de Geografia e Estatística. Censo 2010. Disponível em <http://www.censo2010.ibge.gov.br/>. Acesso em 10 de maio de 2020.</p>\n                            <p>\n                                Li, R., Pei, S., Chen B., Song, Y., Zhang, T., Yang, W. & Shaman, J. (2020, 16 de março). Substantial undocumented infection facilitates the rapid dissemination of novel coronavirus (SARS-CoV2). Science. DOI: 10.1126/science.abb3221\n                            </p>\n                            <p>\n                                Sales J. (2020, 10 de março). What happens after you recover from coronavirus? 5 questions answered. World Economic Forum. DOI: https://www.weforum.org/agenda/2020/03/coronavirus-recovery-what-happens-after-covid19\n                            </p>\n                            <p>\n                                Serrano, C. (2020, 24 de março) O que mutações podem representar no combate ao novo coronavírus. BBC Brasil. DOI: https://www.bbc.com/portuguese/brasil-52069729\n                            </p>\n                            <p>Zhou, F. et al. (2020, 11 de março). Clinical course and risk factors for mortality of adult inpatients with COVID-19 in Wuhan, China: a retrospective cohort study. The Lance. DOI: https://doi.org/10.1016/S0140-6736(20)30566-3</p>\n                            <p>\n                                Wilensky, U. (1998). NetLogo Virus model. http://ccl.northwestern.edu/netlogo/models/Virus. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.\n                            </p>\n                            <p>\n                                Wilensky, U. (1999). NetLogo. http://ccl.northwestern.edu/netlogo/. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL.\n                            </p>\n                            <p>\n                                Guedes Pinto, José Paulo; Magalhães, Patrícia; Santos Carlos Silva. (2020). Modelo de Dispersão Comunitária Coronavírus (MD Corona), Universidade Federal do ABC, São Bernardo do Campo, Brasil.  \n                            </p>\n                            <p>\n                                DORIGATTI, I. et al. Report 4 : Severity of 2019-novel coronavirus ( nCoV ). Imperial College London COVID-19 Response Team, n. February, p. 1–12, 2020.\n                            </p>\n                            <p>\n                                LU, X. et al. Adjuvant corticosteroid therapy for critically ill patients with COVID-19. medRxiv, p. 2020.04.07.20056390, 2020.\n                                \n                            </p>\n                            <p>NY, G. Amid Ongoing COVID-19 Pandemic, Governor Cuomo Announces Phase II Results of Antibody Testing Study Show 14.9% of Population Has COVID-19 Antibodies. 27 de Abril, 2020.</p>\n                            <p>\n                                TIMES, N. Coronavirus early outbreaks. 23 de Abril, 2020a.\n                            </p>\n                            <p>\n                                TIMES, N. New York coronavirus response delays. 08 de Abril, 2020b. \n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main notes\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Notas</h3>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"list-group\">\n                        <a routerLink=\"note2\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Nota sobre estudo que prevê data para o fim da Pandemia\n                        </a>\n                        <a routerLink=\"note1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Dados do prefeito de São José dos Campos são questionáveis \n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-9\">\n                    <p [class.d-none]=\"isOpen()\">Escolha o artigo a ser lido na sua lateral.</p>\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main howtoact\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Parceiros</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <h4>Parceiros</h4>\n                        <p>COVID-19 BRASIL <a href=\"https://ciis.fmrp.usp.br/covid19/\" target=\"_blank\">https://ciis.fmrp.usp.br/covid19/</a></p>\n                        <hr>\n                        <h4>Apoio:</h4>\n                        <p>Fundação Tide Setubal : <a href=\"https://fundacaotidesetubal.org.br/\" target=\"_blank\">https://fundacaotidesetubal.org.br/</a></p>\n                        <p>Universidade Federal do ABC: <a href=\"http://www.ufabc.edu.br/\" target=\"_blank\">http://www.ufabc.edu.br/</a></p>\n                        <hr>\n                        <h4>Prêmios</h4>\n                        <ul class=\"list-unstyled\">\n                            <p>Escola Nacional de Administração Pública (ENAP): concurso Desafios Covid-19 - 4º lugar pessoa jurídica - <a href=\"https://repositorio.enap.gov.br/bitstream/1/4890/6/SEI_ENAP%20-%200377189.pdf\" target=\"_blank\">Link</a></p>\n                            <p>Banco Nacional de Desenvolvimento Econômico e Social (BNDES): concurso Desafios Covid-19 - 4º lugar pessoa jurídica - <a href=\"https://www.bndes.gov.br/wps/portal/site/home/imprensa/noticias/conteudo/bndes-apoia-premiacao-voltada-ao-enfrentamento-da-covid19/!ut/p/z1/vZRNU9swEIZ_Sw8-arS2JX8cTXBiiCHTQoD4wmxsmajFkklEoP31VTLpDNCJPW2a-mBL8u6zq1erpQW9o4XCtXxAI7XCRzufFcF9Ho_TjE0gB37NIDn1QzYNUxhHHr3dGsCeJwFa7PdnQ6A3tKBFqUxrFnQ2V5VY3Uu1MtI8l9sMHFjoRjggm3Yp1AodUNrIUuLKgVIrI54r7cDWkWCrJRJr10gsUZO1fjRYIbFDoWrrbrCxL03sWqnXsnLjTfS2lBWd1TWv_bkfEhACCeMcSITcJSWLXIE-ogj83W475Ci6xej038hR9KldvDeZnPkpJNkg5ywdu6PY3xl0HUjfkXwwGJ3mHiQ5H8Lw8-UoTTw6s7sI96dpZVpL8UKnSi8bW0NXfyhyBj0RJt6BEXrw_Lj48Kh4xg7En_cVoe0J3vJicPFgsWgWRKpa07u_v4KWJ78-PRWJbQSbG_1qdrT_2wk6ZWVDd7-sYQAxlFVFApcBYYAeiXlQkbBGZJ79G5Tz3_BXJ77Fh2c8H8WQeeE_xr_P_iY4Lp4fF3-oOOd9Le_gEqRtM20i_7sk375kP04uyWgwj16u62b3uY3M2-mv1eTTT4Ba9-w!/dz/d5/L2dBISEvZ0FBIS9nQSEh/\" target=\"_blank\">Link</a></p>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publications.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publications.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main publications\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Publicações</h3>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"list-group\">\n                        <a routerLink=\"note4\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Nota técnica sobre o relaxamento do isolamento social no Estado de São Paulo previsto para o dia 1º de junho de 2020 (31/05/2020)\n                        </a>\n                        <a routerLink=\"note3\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            O Índice de Vulnerabilidade COVID-19 (IVC19) (18/05/2020)\n                        </a>\n                        <a routerLink=\"note2\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Nota sobre estudo que prevê data para o fim da Pandemia (29/04/2020)\n                        </a>\n                        <a routerLink=\"note1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Dados do prefeito de São José dos Campos são questionáveis (22/04/2020)\n                        </a>\n                        <a routerLink=\"article1\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Simulando a evolução da transmissão comunitária do coronavírus por meio do Modelo MD Corona (04/04/2020)\n                        </a>\n                        <!-- <a routerLink=\"article2\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action\">\n                            Press Release\n                        </a> -->\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-9\">\n                    <!-- <p [class.d-none]=\"isOpen()\">Escolha o artigo a ser lido na sua lateral.</p> -->\n                    <router-outlet></router-outlet>\n                </div>                    \n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicity/publicity.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicity/publicity.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main publicity\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Na Mídia</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <!-- justify-content-md-center -->\n                    <div class=\"card\">\n                        \n                        <div class=\"list-group\">\n                            <a href=\"https://www.dw.com/pt-br/desigualdade-eleva-letalidade-da-covid-na-favela-diz-estudo/a-53586352\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">DW</h5>\n                                    <small>28/05/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    Desigualdade eleva letalidade da covid na favela, diz estudo\n                                </p>\n                            </a>\n\n                            <a href=\"https://valor.globo.com/brasil/noticia/2020/05/21/lockdown-exigira-ajuda-a-mais-pobres-dizem-especialistas.ghtml\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">Valor</h5>\n                                    <small>21/05/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    'Lockdown' exigirá ajuda a mais pobres, dizem especialistas\n                                </p>\n                            </a>\n\n                            <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">Carta Capital</h5>\n                                    <small>08/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    \"Mal incurável - O Austerício e a demonização do Estado encontram seu último refúgio no Brasil de Paulo Guedes\" por Carlos Drummond <br>\n                                    <strong>Edição impressa apenas.</strong>\n                                </p>\n                            </a>\n                            \n                            <a href=\"https://revistagalileu.globo.com/Tecnologia/noticia/2020/04/cientistas-brasileiros-desenvolvem-simulador-de-disseminacao-da-covid-19.html\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">Revista Galileu</h5>\n                                    <small>07/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    Cientistas brasileiros desenvolvem simulador de disseminação da Covid-19\n                                </p>\n                            </a>\n                            <a href=\"https://noticias.uol.com.br/colunas/leonardo-sakamoto/2020/04/01/sao-paulo-pode-passar-por-novos-confinamentos-mostra-simulador-de-covid-19.html\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">Coluna Leonardo Sakamoto</h5>\n                                    <small>01/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    Brasil pode passar por ondas de confinamentos aponta simulador de Covid-19\n                                </p>\n                            </a>\n                            \n\n                            <a href=\"https://diplomatique.org.br/simulacoes-indicam-que-confinamento-deve-ser-maximo/\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\">Le monde Diplomatique Brasil</h5>\n                                    <small>01/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    Simulações indicam que confinamento deve ser máximo\n                                </p>\n                            </a>\n                            \n                            <a target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\"> Mídia Ninja </h5>\n                                    <small>03/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    VIVA A CIÊNCIA! Enquanto Bolsonaro espalha mentiras e corta recursos para pesquisadores, a academia se debruça em novos estudos sobre coronavírus\n                                    <br>\n                                    <a href=\"https://www.instagram.com/p/B-fcjP_hbii/\" target=\"_blank\"><i class=\"fab fa-instagram-square\"></i></a> | \n                                    <a href=\"https://www.facebook.com/MidiaNINJA/photos/a.164308700393950/1810914195733384\" target=\"_blank\"><i class=\"fab fa-facebook-square\"></i></a>\n                                </p>\n                            </a>\n\n                            <a href=\"https://radiobandeirantes.band.uol.com.br/programas/5e9240d28525f5fc2faf06a2/5a4562d9fadeb628046b1f02\" target=\"_blank\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n                                <div class=\"d-flex w-100 justify-content-between\">\n                                    <h5 class=\"mb-1 publicity-title\"> \"Você é Curioso?\" </h5>\n                                    <small>11/04/2020</small>\n                                </div>\n                                <p class=\"mb-1\">\n                                    Participação no programa da Rádio Bandeirantes \"Você é Curioso?\"\n                                </p>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main statistics\">\n    <div class=\"section section-gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"main-header text-center\">\n                        <h3>Estatísticas</h3>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-12\">\n                    <div class=\"card\">\n                        <p>\n                            Nesta página, apresentamos as estatísticas e os estudos de caso sobre a vulnerabilidade à Covid-19 e as medidas de \n                            proteção às populações expostas. Empregamos o IVC19 <a href=\"https://github.com/zecopol/zecopol/raw/master/Artigo_IVC_21052020.pdf\" target=\"_blank\">(clique aqui para conhecer)</a> para compreender as curvas de infecção, \n                            morte e mortalidade, segundo as diferentes escalas de vulnerabilidade.\n                        </p>\n                    </div>\n                    <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n                        <ngb-panel id=\"static-1\">\n                            <ng-template ngbPanelTitle>\n                                <h4>Estudo de Caso: Rio de Janeiro</h4>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                <p>\n                                    Com as bases do Data Rio (2020) e do Censo (IBGE, 2010), foi possível desenvolver uma análise da distribuição de contaminados e mortos pela COVID-19 no município do Rio de Janeiro para cada uma das escalas do IVC19.\n                                </p>\n                                <p>\n                                    Analisando os números de contaminados e mortos para cada faixa do índice, é possível observar que, no primeiro momento, o vírus atingiu o grupo menos vulnerável, que se concentra nos bairros onde o poder aquisitivo é maior. Em seguida, avançou para as regiões mais vulneráveis do Rio, onde vive considerável parcela dos trabalhadores essenciais. \n                                </p>\n                                <p>\n                                    A incidência de contaminados e mortos é mais baixa nas faixas de média e baixa vulnerabilidade, ao passo que a taxa de mortalidade da parcela vulnerável e muito vulnerável à doença é mais alta. Há uma diferença significativa entre índices de mortalidade de bairros cuja a vulnerabilidade foi considerada baixa e os índices dos bairros considerados vulneráveis ou muito vulneráveis.\n                                </p>\n                                <p>\n                                    Podemos presumir que mais testes são feitos entre a população menos vulnerável, mas isso não se repete para o grupo mais vulnerável. Esta diferença pode provocar uma elevada subnotificações nessas localidades. A diferença significativa na taxa de mortalidade entre os grupos também permite inferir que os pacientes mais vulneráveis à doença são encaminhados ao pronto-atendimento em um estágio mais grave da doença, ou ainda, são testados apenas após virem a óbito.\n                                </p>\n                                \n                                <iframe id=\"riodejaneiro\" src=\"https://datastudio.google.com/embed/reporting/98e493ef-b0fb-4396-9d7b-c395f3681b5e/page/1M\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                                <hr>\n                                <h4>Escala de Vulnerabilidade aplicada ao IVC19</h4>\n                                <p>\n                                    Para definir as faixas de vulnerabilidade, aplicamos as mesmas variáveis, do IVC19 de zonas urbanas, aos 162 bairros do Rio de Janeiro. Com isso, Grumari (0,28), Mangueira (0,30) e Rocinha (0,31), são os três bairros com menor índice e foram classificados como muito vulneráveis ao Covid-19. Gamboa (0,61) e Santa Cruz (0,64) foram classificados como vulneráveis, Bangu (0,75) e São Conrado como médio e, por fim, Copacabana (0,88) e Ipanema (0,89) são pouco vulneráveis.\n                                    \n                                    Com isso, chegamos às 4 faixas de vulnerabilidade detalhados nas tabelas e histograma a seguir (tabela 2 e 3).\n                                </p>\n                                <div class=\"table-responsive-sm\">\n                                    <table class=\"table table-bordered table-striped table2 float-left\">\n                                        <caption>Tabela 2: Faixas semafóricas do IVC</caption>\n                                        <thead>\n                                            <tr>\n                                                <th>Pontuação</th>\n                                                <th>Indicativo</th>\n                                                <th>Cor</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>acima de 0.8</td>\n                                                <td>Pouco Vulnerável</td>\n                                                <td style=\"background-color: rgb(117, 249,76); color: black;\">Verde</td>\n                                            </tr>\n                                            <tr>\n                                                <td>0.65 a 0.8</td>\n                                                <td>Vulnerabilidade Média</td>\n                                                <td style=\"background-color: rgb(255, 253,85); color: black;\">Amarela</td>\n                                            </tr>\n                                            <tr>\n                                                <td>0.5 a 0.65</td>\n                                                <td>Vulnerável</td>\n                                                <td style=\"background-color: rgb(242, 157,57); color: black;\">Laranja</td>\n                                            </tr>\n                                            <tr>\n                                                <td>abaixo de 0.5</td>\n                                                <td>Muito Vulnerável</td>\n                                                <td style=\"background-color: rgb(188, 38,26); color: black;\">Vermelho</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <img src=\"./assets/img/statistics/statistics_riodejaneiro_image4.png\" class=\"mx-auto d-block img-fluid\">\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel id=\"static-2\">\n                            <ng-template ngbPanelTitle>\n                                <h4>Estudo de Caso: Fortaleza</h4>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                <iframe id=\"fortaleza\" src=\"https://datastudio.google.com/embed/reporting/9ba420d4-a555-414c-a671-00f50821a6b1/page/1M\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                            </ng-template> \n                        </ngb-panel> \n                    </ngb-accordion>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article1/article1.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article1/article1.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-note\">\n  \n  <pdf-viewer [src]=\"src\"\n  [show-all]=\"false\"\n  [page]=\"page\"\n  (after-load-complete)=\"afterLoadComplete($event)\">\n  </pdf-viewer>\n  <hr>\n  <div *ngIf=\"isLoaded\" class=\"control-pdf-buttons\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n      <button type=\"button\" class=\"btn pdf-button\" (click)=\"prevPage()\" [disabled]=\"page === 1\">Anterior</button>\n      <button type=\"button\" class=\"btn pdf-button\" (click)=\"nextPage()\" [disabled]=\"page === totalPages\">Próximo</button>\n    </div>\n    <p class=\"text-center\"><span>{{ page }}</span> / <span>{{ totalPages }}</span></p>\n    \n    <p>Se você deseja efetuar o download do artigo, clique <a href=\"https://zecopol.github.io/zecopol/Artigo_SimulandoEvolucaoDaTransmissao.pdf\" target=\"_blank\">aqui</a></p>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article2/article2.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article2/article2.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-note\">\n    <h4>Disseminação do Covid-19 pode nos levar a ciclos de surto e confinamento por \n        longo prazo, apontam pesquisadores\n    </h4>\n    <em>Pesquisadores brasileiros desenvolvem modelo para simular cenários de contágio pelo vírus e \n        reforçam a necessidade de isolamento social como principal medida de controle\n    </em>\n    <p>\n        Um grupo de pesquisadores brasileiros construiu um software que permite a simulação de cenários de \n        evolução da transmissão comunitária do Coronavírus (Covid-19). As análises iniciais apontam que sob \n        determinadas condições, como comportamento das pessoas, reintrodução do vírus no ambiente, imunidade ou \n        mutação das cepas do vírus, o coronavírus pode perpetuar-se, levando a surtos de epidemia recorrentes \n        por tempo indeterminado, o que levaria a população a novos períodos de confinamento e a impactos econômicos \n        ainda mais profundos até a criação e popularização de vacinas e outros tratamentos.\n    </p>\n    <p>\n        \"Todos os casos simulados reforçam a eficácia da estratégia de confinamento máximo, extremo, como a melhor forma \n        de achatar a curva de dispersão do vírus, mas a eficácia mais garantida depende de uma alta porcentagem de \n        isolamento de aproximadamente 90% das pessoas durante os surtos de contaminação\", aponta <strong>José Paulo Guedes</strong>, \n        um dos autores, Economista e professor da UFABC. Junto com ele, assinam a pesquisa e o código do \n        simulador <strong>Patrícia Camargo Magalhães</strong> (Física, Pós-Doutoranda na Universidade de Bristol) \n        e <strong>Carlos da Silva dos Santos</strong> (Cientista da Computação, professor da UFABC).\n    </p>\n    <p>\n        A ferramenta está disponível on-line (<a href=\"https://zecopol.github.io/MD-Corona/\" target=\"_blank\">https://zecopol.github.io/MD-Corona/</a>) e pode ser abastecida \n        livremente por usuários para simulações, usando parâmetros como densidade populacional, imunidade, capacidade e janela de transmissão, entre outros. \n        O software foi adaptado de um modelo desenvolvido em 1998 que simula a disseminação do vírus da gripe, agora \n        reprogramado com as condições conhecidas do novo \"super vírus\".\n    </p>\n    <p> \n        <figure class=\"figure\">\n            <img src=\"../../../assets/img/simulador_image.png\" class=\"figure-img img-fluid rounded\">\n            <figcaption class=\"figure-caption text-center\">Tela do Simulador</figcaption>\n          </figure>\n    </p>\n    <p>\n        O draft do artigo acadêmico apresentado pelo grupo de pesquisadores avaliou diferentes cenários, sendo que o mais pessimista deles <strong>considera \n        a inexistência de confinamento e isolamento</strong>: neste caso enfrentaríamos uma recorrência de surtos de contaminação social (crescimento seguidos de baixas) \n        em curtos períodos de tempo e a convivência com o coronavírus por tempo indeterminado. Segundo Guedes, como um agente contaminado é reintroduzido a cada três \n        meses no ambiente, mesmo que tenhamos alta imunidade ao vírus, o comportamento cíclico de contágio só cessaria caso fosse estabelecido isolamento de \n        aproximadamente 90% da população durante os surtos. \"Além do fator social evidente, podemos dizer que a previsão atual de quedas drásticas \n        nos PIBs dos países desenvolvidos, algo que pode chegar até -18%, será ainda pior em um cenário cíclico\", comenta o pesquisador.\n    </p>\n    <p>\n        Segundo a análise dos acadêmicos a saída da quarentena e do isolamento nos países também será um fator decisivo, pois fazer isso \n        antecipadamente pode reiniciar um processo agudo de contaminação.\n    </p>\n    <p>\n        Os pesquisadores desenvolveram a plataforma de maneira independente e agora buscam financiamento de agências de fomento à \n        pesquisa para ampliar as variáveis e envolver especialistas de outras áreas. \"Deixamos o software aberto para uso público porque as \n        simulações servem tanto para fins educacionais e de pesquisa, como podem ser utilizadas, ainda que de forma cautelosa, como ferramenta para \n        a tomada de decisões\", explica Guedes.\n    </p>\n    <p>\n        Acesse o modelo online: <a href=\"https://zecopol.github.io/MD-Corona/\" target=\"_blank\">https://zecopol.github.io/MD-Corona/</a>\n    </p>\n    <p>\n        Leia o estudo completo aqui: <a href=\"https://zecopol.github.io/MD-Corona/Artigo2.html\" target=\"_blank\">https://zecopol.github.io/MD-Corona/Artigo2.html</a>\n    </p>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note1/note1.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note1/note1.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-note\">\n    <h4> \n        Dados do prefeito de São José dos Campos são questionáveis \n    </h4>\n    <em>\n        Fim da quarentena em SJC: a pseudociência a serviço da morte\n    </em>\n    <p>\n        No dia 17 de Abril de 2020, a prefeitura de São José dos Campos, maior cidade de região do Vale do Paraíba no Estado de São Paulo publicou decreto que libera o \n        funcionamento de estabelecimentos comerciais nas principais ruas do comércio e nos shoppings.\n    </p>\n    <p>\n        O prefeito Felício Ramuth alega que a decisão foi baseada na ciência, em especial numa pesquisa que teve como amostra 450 moradores da cidade de São José na \n        qual constatou que 3,11% destes já teriam contraído o COVID-19 e, portanto, teriam os anticorpos da doença (estariam imunes). Ao fazer uma simples multiplicação da \n        amostra, o prefeito afirma que 23 mil pessoas (de um universo de 600 mil) já teriam os anticorpos. Além disso, ele argumenta, usando os dados \n        de óbitos na cidade (embora ainda não tenhamos acesso ao Datasus de março) que São José apresenta uma baixa mortalidade, cita uma média de 5 dias de \n        internação na UTI, e que a cidade possui atualmente uma taxa baixa de ocupação dos leitos de UTI (8% estariam sendo utilizados).\n    </p>     \n    \n    <p>\n        É alarmante o discurso do prefeito Felício Ramuth, que se utiliza do mantra \"Ciência para preservar vidas\", para justificar uma medida política que atenta contra a \n        vida das pessoas e que vai de encontro com o decreto do Governador João Doria. \n    </p>\n    <p>\n        Do ponto de vista da ciência existem vários problemas na afirmação do Prefeito:\n    </p>\n    <ol>\n        <li>    \n            Em primeiro lugar, existe uma série de exigências processuais que certificam a qualidade de uma pesquisa e precisam ser compartilhadas em conjunto com os \n            resultados, o que não ocorreu nesse caso. Dentre elas, citam-se, a amostragem e o recorte de pessoas que participaram da pesquisa.  \n            Uma amostra de 450 pessoas em um universo de 600 mil configura 0.075% da população. Para obter algum estudo confiável com essa baixa aquisição de dados, \n            o universo das diferentes regiões da cidade precisam ser representados proporcionalmente buscando abarcar as diferentes realidades sociais da cidade. \n            O viés amostral é uma possível fonte de erros, isso ocorre quando a amostra é escolhida de forma a privilegiar alguns indivíduos com perfil específico \n            (bairro, faixa etária, entre outros) aumentando a probabilidade de serem incluídos na amostra em detrimento de outros. \n            Erros na amostragem são em geral considerados como erros sistemáticos. \n        </li>\n        <li>\n            Além da amostragem, outra fonte potencial de erro é a qualidade dos testes aplicados para COVID-19. Todo teste vai apresentar uma taxa de \n            falsos negativos (pessoas doentes identificadas como saudáveis) e uma taxa de falsos positivos (pessoas saudáveis identificadas como doentes). \n            Os testes rápidos aplicados em São José dos Campos identificam a presença de anticorpos e são menos confiáveis do que os testes do tipo \"PCR\", que identificam o material \n            genético do vírus. Sem a divulgação dos índices de erro dos testes aplicados, não é possível avaliar o grau de incerteza associado ao valor 3,11% de pessoas \n            expostas ao vírus. No caso da referida pesquisa, a falta de conhecimento sobre esses fatores técnicos compromete a confiabilidade da pesquisa.\n        </li>\n        <li>\n            Outro fator que está ausente nas declarações do prefeito é a já reconhecida subnotificação de casos e o atraso nos resultados dos poucos testes \n            que têm sido realizados. Ainda assim, somente com os dados oficiais apresentados, nota-se que a curva de infectados ainda segue na ascendente, ou seja, \n            ela ainda não atingiu o máximo de contaminação. O número de óbitos ainda é baixo (3) segundo os dados oficiais, mas acompanhando o crescimento da curva de casos, \n            esse número ainda deve aumentar. \n        </li>\n    </ol>\n    <figure>\n        <img src=\"./assets/articles/img-article1.png\" class=\"img-fluid\">\n        <figcaption>\n            Figura 1: Número de casos de Covid-19 em São José dos Campos por dia reportados entre o período de 17 de Março e 18 de Abril. <br>\n            Fonte: <a href=\"https://www.sjc.sp.gov.br/servicos/saude/coronavirus-acoes-em-sao-jose/informe-epidemiologico/\" target=\"_blank\">https://www.sjc.sp.gov.br/servicos/saude/coronavirus-acoes-em-sao-jose/informe-epidemiologico/</a>\n        </figcaption>\n    </figure>\n    <p>\n        Uma abertura precipitada da quarentena pode elevar o contágio a níveis alarmantes, e poderemos ver se repetir os quadros da pandemia apresentados em países europeus \n        que demoraram a optar pela quarentena, notadamente na Itália, na França, na Espanha, Reino Unido e Suécia.\n    </p>\n    <p>\n        É grave também o uso indevido de pesquisas científicas para dar sustentação ao discurso do prefeito e de muitos outros governantes, que apostam na imunidade de longo prazo \n        para definir suas ações. \n    </p>\n    <p>\n        Aliás, a visão da prefeitura foi confirmada pelo secretário municipal de Saúde, Danilo Stanzani, em entrevista ao telejornal Bom Dia Vanguarda (da sucursal da Globo em São José), no dia \n        21 de abril,  na qual  declarou que é preciso aumentar o percentual de infectados pelo novo coronavírus para que a população crie anticorpos. Há um extenso debate sobre a aquisição \n        da imunidade, não é possível saber se as pessoas que de fato pegaram covid-19, sintomáticos ou não, recuperadas ou não, são imunes e não podem pegar o vírus novamente \n        <a href=\"http://www.nytimes.com/2020/04/13/opinion/coronavirus-immunity.html\" target=\"_blank\">(http://www.nytimes.com/2020/04/13/opinion/coronavirus-immunity.html)</a> \n    </p>\n    <p>\n        <a href=\"https://noticias.uol.com.br/ultimas-noticias/reuters/2020/04/17/oms-ve-poucos-sinais-de-imunidade-de-grupo-para-covid-19-diz-que-esta-ajudando-brasil-a-adquirir-testes.htm\" target=\"_blank\">https://noticias.uol.com.br/ultimas-noticias/reuters/2020/04/17/oms-ve-poucos-sinais-de-imunidade-de-grupo-para-covid-19-diz-que-esta-ajudando-brasil-a-adquirir-testes.htm</a>) Embora essa seja uma questão central em todas as políticas de saída da quarentena, os dados sobre a imunidade ao vírus ainda são recentes para que se possa afirmar a sua extensão. Já foram divulgados casos na literatura científica especializada sobre casos de reinfecção com o novo coronavírus. Ou seja, ainda sequer alcançamos o ápice do contágio e o prefeito já aposta na imunização, baseando-se em uma pesquisa com fraco rigor científico e que se referencia em 3,11% de pessoas expostas ao vírus. \n    </p>\n    <p>\n        Outro fator ignorado na análise do prefeito é a recente pesquisa científica publicada dia 17 de Abril pela UNESP (https://www.saopaulo.sp.gov.br/noticias-coronavirus/estudo-da-unesp-preve-pandemia-mais-forte-no-interior-de-sp-em-tres-semanas/) na qual modelos mostram que o pico de contaminação no interior de São Paulo acontecerá em 3 semanas. Isso porque há um atraso em relação à capital devido ao tempo em que pessoas-vetores levam o vírus até cidades pólos como São José dos Campos, que é a porta de entrada para o Vale do Paraíba, o Litoral Norte Paulista, a região Sul de Minas Gerais, e ponto de passagem rodoviária entre Rio e São Paulo, as duas principais cidades do maiores, e que concentram o maior número absoluto de casos.  \n    </p>\n    <p>\n        Infelizmente, a omissão do prefeito diante de pesquisas científicas sérias e modelos que mostram que a curva epidêmica do Estado ainda está em fase de crescimento pode significar uma aposta de altíssimo risco para a saúde da população da região, com a possibilidade de fazer aumentar rapidamente os números da pandemia, e principalmente o de óbitos (que virá pela principal doença do coronavírus, a síndrome respiratória aguda grave, e também por consequência da saturação do sistema de saúde local quando os casos se aumentarem) a exemplo de experiências internacionais desastrosas como a Itália e Espanha. Como diz Átila Iamarino: \"Se você não para voluntariamente e controladamente, paga um preço caro. Ganha uma semana ou duas e perde muito, muito mais.\"\n    </p>\n    \n    <p>\n        Nós, pesquisadoras e pesquisadores estamos trabalhando em simulações e discussões sobre a evolução da pandemia. Como cientistas que desenvolvem pesquisa com seriedade, gostaríamos de ter acesso aos detalhes dessa pesquisa, como dados e notificações, para avaliar se o prefeito está tomando decisões com base científica adequada ou se isto é apenas uma decisão política, um achismo. É  urgente eliminar a dicotomia entre o debate político-econômico da Saúde e o bem estar da população. A depender da resposta da prefeitura, iniciaremos um debate necessário com as autoridades e com pesquisadores de instituições acadêmicas regionais, a fim de evitar uma verdadeira tragédia humanitária na região.\n    </p>\n    <p>\n        Assinam essa nota todas e todos os pesquisadores dos grupos:\n    </p>\n    \n    <p>\n        Ação Interdisciplinar COVID-19 <a href=\"https://simulacovid.github.io/covid19/index.html\" target=\"_blank\">(https://simulacovid.github.io/covid19/index.html)</a>\n        <br>\n        COVID-19 BRASIL <a href=\"https://ciis.fmrp.usp.br/covid19/\" target=\"_blank\">(https://ciis.fmrp.usp.br/covid19/)</a>\n        \n    </p>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note2/note2.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note2/note2.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"article-note\">\n    <h4>\n        Nota sobre estudo que prevê data para o fim da Pandemia\n    </h4>\n    <p>\n        Nos últimos dias, um site contendo previsões sobre o final da pandemia de Covid-19 tem sido amplamente divulgado em grupos de WhatsApp no Brasil. O site, criado pelo Data-Driven Innovation Lab da Universidade de Tecnologia e Design de Cingapura (<a href=\"ttps://ddi.sutd.edu.sg/\" target=\"_blank\">https://ddi.sutd.edu.sg/</a>) divulga datas estimadas para o final da pandemia em diversos países, incluindo o Brasil. De acordo com o artigo de trabalho que acompanha as previsões, \"o modelo, dados e previsões são imprecisos e insuficientes para representar completamente as realidades complexas, em evolução e heterogêneas de nosso mundo.\" Os próprios autores admitem que o modelo ignora a possibilidade de múltiplas ondas de contaminação (como já tem sido observado em algumas localidades que pareciam ter contido o vírus e sofreram com aumento de casos logo após o relaxamento das medidas de isolamento social). No caso específico do Brasil, a previsão utiliza dados oficiais de casos diários, que notoriamente apresentam problemas de subnotificação e atrasos de contabilização. Qualquer análise sobre a dinâmica da doença no Brasil deve levar em conta a subnotificação de casos, as diferenças regionais e as diferentes realidades de adesão às medidas de isolamento social, ausentes no modelo da Universidade de Cingapura.\n    </p>\n    <p>\n        As previsões do DDI seguem um modelo de difusão da epidemia denominado SIR (Suscetível-Infectado-Removido). Esse modelo adota algumas simplificações, por exemplo, o modelo não considera dados demográficos, efeitos de medidas de isolamento e características do sistema de saúde. Mesmo supondo que o modelo SIR seja adequado, o método de ajuste ignora problemas com os dados. As previsões são oferecidas sem nenhuma estimativa de incerteza, induzindo uma falsa impressão de precisão. A difusão da epidemia segue uma curva exponencial em seu estágio inicial. Nos países, como o Brasil, em que o número de casos ainda cresce aceleradamente, apenas os dados desse estágio inicial estão disponíveis para estimação. Qualquer erro de medição presente nos dados é amplificado diversas vezes pela característica da curva exponencial. Logo, previsões utilizando o modelo SIR nesse estágio apresentam baixa confiabilidade.\n    </p>    \n    <p> \n        Reforçando o argumento, todos os modelos de simulação (incluso o nosso) mostram que a curva de transmissão dependente de variáveis dinamicas e portanto, qualquer mudança em uma delas (confinamento, numero de leitos, etc) no curso do tempo afeta a curva resultante. Como é possível ver nos dados dos diferentes países que já passaram o 1º pico da pandemia, o formato da curva de contaminação é bem diverso. O ajuste proposto (curva ajustada) tem um formato Gaussiano que é o mesmo para todos os países e claramente não conseguem descrever bem os dados. Ainda como um exercício de aproximação é muito fraco e pouco preditivo principalmete em países que nem sequer chegaram ao pico do contaminação e mortes pelo vírus.\n    </p>    \n    <p>\n        Ação Covid-19   \n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note3/note3.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note3/note3.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"article-note\">\n  \n    <pdf-viewer [src]=\"src\"\n    [show-all]=\"false\"\n    [page]=\"page\"\n    (after-load-complete)=\"afterLoadComplete($event)\">\n    </pdf-viewer>\n    <hr>\n    <div *ngIf=\"isLoaded\" class=\"control-pdf-buttons\">\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn pdf-button\" (click)=\"prevPage()\" [disabled]=\"page === 1\">Anterior</button>\n        <button type=\"button\" class=\"btn pdf-button\" (click)=\"nextPage()\" [disabled]=\"page === totalPages\">Próximo</button>\n      </div>\n      <p class=\"text-center\"><span>{{ page }}</span> / <span>{{ totalPages }}</span></p>\n      \n      <p>Se você deseja efetuar o download do artigo, clique <a href=\"https://github.com/zecopol/zecopol/raw/master/Artigo_IVC_21052020.pdf\" target=\"_blank\">aqui</a></p>\n    </div>\n  </div> -->\n\n  <div class=\"article-note\">\n    <iframe src=\"./assets/articles/Artigo_IVC_21052020.pdf#toolbar=0\" width=\"100%\" height=\"500px\">\n    </iframe>\n\n    <hr>\n    <p>Para download do artigo, clique <a href=\"./assets/articles/Artigo_IVC_21052020.pdf\" target=\"_blank\">aqui</a></p>\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note4/note4.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note4/note4.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"article-note\">\n  \n    <pdf-viewer [src]=\"src\"\n    [show-all]=\"false\"\n    [page]=\"page\"\n    (after-load-complete)=\"afterLoadComplete($event)\">\n    </pdf-viewer>\n    <hr>\n    <div *ngIf=\"isLoaded\" class=\"control-pdf-buttons\">\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn pdf-button\" (click)=\"prevPage()\" [disabled]=\"page === 1\">Anterior</button>\n        <button type=\"button\" class=\"btn pdf-button\" (click)=\"nextPage()\" [disabled]=\"page === totalPages\">Próximo</button>\n      </div>\n      <p class=\"text-center\"><span>{{ page }}</span> / <span>{{ totalPages }}</span></p>\n      \n      <p>Se você deseja efetuar o download do artigo, clique <a href=\"./assets/articles/3105_NotaTecnica.pdf\" target=\"_blank\">aqui</a></p>\n    </div>\n  </div> -->\n\n  <div class=\"article-note\">\n    <iframe src=\"./assets/articles/3105_NotaTecnica.pdf#toolbar=0\" width=\"100%\" height=\"500px\">\n    </iframe>\n\n    <hr>\n    <p>Para download do artigo, clique <a href=\"./assets/articles/3105_NotaTecnica.pdf\" target=\"_blank\">aqui</a></p>\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav footer-link\">\n                <ul>\n                    <li><a>Apoio:</a></li>\n                    <li><a href=\"https://fundacaotidesetubal.org.br/\" target=\"_blank\"><img class=\"logo-apoio\" src=\"./assets/img/tidesetubal_logo_vertical.png\" alt=\"tide setubal\"></a></li>\n                    <li><a href=\"http://www.ufabc.edu.br/\" target=\"_blank\"><img class=\"logo-apoio\" src=\"./assets/img/logotipo-ufabc-pb.png\" alt=\"ufabc\"></a></li>\n                    <li><a href=\"#\" target=\"_blank\"><img class=\"logo-premios\" src=\"./assets/img/parceiro_bndes.png\" alt=\"parceiro_bndes\"></a></li>\n                    <li><a href=\"#\" target=\"_blank\"><img class=\"logo-premios\" src=\"./assets/img/parceiro_enap.png\" alt=\"enap\"></a></li>\n\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    Ação Covid19 &copy; Atualizado em: {{ today | date: 'dd/MM/yyyy'}}, feito por <a href=\"http://pamgaiguer.github.io/pamgaiguer\" target=\"_blank\">Pam Gaiguer</a>\n                    <!-- com <i class=\"fa fa-heart heart\"></i>  -->\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img class=\"logo-web\" src=\"./assets/img/main_logo.png\" alt=\"\"></a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown\">\n                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Simulador</a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                          <a class=\"dropdown-item\" [routerLink]=\"['/dash']\">Simulador</a>\n                          <a class=\"dropdown-item\" [routerLink]=\"['/howtouse']\">Como Usar</a>\n                          <a class=\"dropdown-item\" [routerLink]=\"['/methodology']\">Metodologia</a>\n                        </div>\n                      </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/howtoact']\" routerLinkActive=\"active\">Como Agir?</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Estudos</a>\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                          <a class=\"dropdown-item\" [routerLink]=\"['/copacabana']\">Copacabana</a>\n                          <a class=\"dropdown-item\" [routerLink]=\"['/fortaleza']\">Fortaleza</a>\n                        </div>\n                      </div>\n                </li>\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/statistics']\" routerLinkActive=\"active\">Estatísticas</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/publications']\" routerLinkActive=\"active\">Publicações</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/aboutus']\" routerLinkActive=\"active\">Sobre</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/publicity']\" routerLinkActive=\"active\">Na Mídia</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/partners']\" routerLinkActive=\"active\">Parceiros</a>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        // this.renderer.listen('window', 'scroll', (event) => {
        //     const number = window.scrollY;
        //     if(this.isHome()){
        //         if (number > 150 || window.pageYOffset > 150 ) {
        //             navbar.classList.remove('navbar-transparent');
        //             // console.log("removi a classe transparent");
        //         } else {
        //             navbar.classList.add('navbar-transparent');
        //             // console.log("adicionei a classe transparent");
        //         }
        //     }
        // });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _publications_article1_article1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./publications/article1/article1.component */ "./src/app/publications/article1/article1.component.ts");
/* harmony import */ var _publications_article2_article2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./publications/article2/article2.component */ "./src/app/publications/article2/article2.component.ts");
/* harmony import */ var _publications_note1_note1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publications/note1/note1.component */ "./src/app/publications/note1/note1.component.ts");
/* harmony import */ var _publications_note2_note2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publications/note2/note2.component */ "./src/app/publications/note2/note2.component.ts");
/* harmony import */ var _publications_note3_note3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./publications/note3/note3.component */ "./src/app/publications/note3/note3.component.ts");
/* harmony import */ var _publications_note4_note4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./publications/note4/note4.component */ "./src/app/publications/note4/note4.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _publications_article1_article1_component__WEBPACK_IMPORTED_MODULE_12__["Article1Component"],
                _publications_article2_article2_component__WEBPACK_IMPORTED_MODULE_13__["Article2Component"],
                _publications_note1_note1_component__WEBPACK_IMPORTED_MODULE_14__["Note1Component"],
                _publications_note2_note2_component__WEBPACK_IMPORTED_MODULE_15__["Note2Component"],
                _publications_note3_note3_component__WEBPACK_IMPORTED_MODULE_16__["Note3Component"],
                _publications_note4_note4_component__WEBPACK_IMPORTED_MODULE_17__["Note4Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__["PdfViewerModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_11__["PagesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _pages_dash_dash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dash/dash.component */ "./src/app/pages/dash/dash.component.ts");
/* harmony import */ var _pages_howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/howtouse/howtouse.component */ "./src/app/pages/howtouse/howtouse.component.ts");
/* harmony import */ var _pages_publicity_publicity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/publicity/publicity.component */ "./src/app/pages/publicity/publicity.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_publications_publications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/publications/publications.component */ "./src/app/pages/publications/publications.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_case_study_copacabana_copacabana_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/case-study/copacabana/copacabana.component */ "./src/app/pages/case-study/copacabana/copacabana.component.ts");
/* harmony import */ var _pages_case_study_fortaleza_fortaleza_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/case-study/fortaleza/fortaleza.component */ "./src/app/pages/case-study/fortaleza/fortaleza.component.ts");
/* harmony import */ var _pages_how_to_act_how_to_act_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/how-to-act/how-to-act.component */ "./src/app/pages/how-to-act/how-to-act.component.ts");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _pages_partners_partners_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/partners/partners.component */ "./src/app/pages/partners/partners.component.ts");
/* harmony import */ var _pages_methodology_methodology_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/methodology/methodology.component */ "./src/app/pages/methodology/methodology.component.ts");
/* harmony import */ var _publications_article1_article1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./publications/article1/article1.component */ "./src/app/publications/article1/article1.component.ts");
/* harmony import */ var _publications_article2_article2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./publications/article2/article2.component */ "./src/app/publications/article2/article2.component.ts");
/* harmony import */ var _publications_note1_note1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./publications/note1/note1.component */ "./src/app/publications/note1/note1.component.ts");
/* harmony import */ var _publications_note2_note2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./publications/note2/note2.component */ "./src/app/publications/note2/note2.component.ts");
/* harmony import */ var _publications_note3_note3_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./publications/note3/note3.component */ "./src/app/publications/note3/note3.component.ts");
/* harmony import */ var _publications_note4_note4_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./publications/note4/note4.component */ "./src/app/publications/note4/note4.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
























var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'copacabana', component: _pages_case_study_copacabana_copacabana_component__WEBPACK_IMPORTED_MODULE_12__["CopacabanaComponent"] },
    { path: 'fortaleza', component: _pages_case_study_fortaleza_fortaleza_component__WEBPACK_IMPORTED_MODULE_13__["FortalezaComponent"] },
    { path: 'dash', component: _pages_dash_dash_component__WEBPACK_IMPORTED_MODULE_6__["DashComponent"] },
    { path: 'howtouse', component: _pages_howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_7__["HowtouseComponent"] },
    { path: 'howtoact', component: _pages_how_to_act_how_to_act_component__WEBPACK_IMPORTED_MODULE_14__["HowToActComponent"] },
    { path: 'statistics', component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"] },
    { path: 'partners', component: _pages_partners_partners_component__WEBPACK_IMPORTED_MODULE_16__["PartnersComponent"] },
    { path: 'components', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_5__["NucleoiconsComponent"] },
    { path: 'methodology', component: _pages_methodology_methodology_component__WEBPACK_IMPORTED_MODULE_17__["MethodologyComponent"] },
    { path: 'aboutus', component: _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"] },
    { path: 'publicity', component: _pages_publicity_publicity_component__WEBPACK_IMPORTED_MODULE_8__["PublicityComponent"] },
    { path: 'publications', component: _pages_publications_publications_component__WEBPACK_IMPORTED_MODULE_10__["PublicationsComponent"],
        children: [
            {
                path: 'note1',
                component: _publications_note1_note1_component__WEBPACK_IMPORTED_MODULE_20__["Note1Component"]
            },
            {
                path: 'note2',
                component: _publications_note2_note2_component__WEBPACK_IMPORTED_MODULE_21__["Note2Component"]
            },
            {
                path: 'note3',
                component: _publications_note3_note3_component__WEBPACK_IMPORTED_MODULE_22__["Note3Component"]
            },
            {
                path: 'note4',
                component: _publications_note4_note4_component__WEBPACK_IMPORTED_MODULE_23__["Note4Component"]
            },
            {
                path: 'article1',
                component: _publications_article1_article1_component__WEBPACK_IMPORTED_MODULE_18__["Article1Component"]
            },
            {
                path: 'article2',
                component: _publications_article2_article2_component__WEBPACK_IMPORTED_MODULE_19__["Article2Component"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __importDefault(__webpack_require__(/*! raw-loader!./basicelements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __importDefault(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.es5.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"],
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __importDefault(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __importDefault(__webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/pages/aboutus/aboutus.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/pages/article/article.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/article/article.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/article/article.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/article/article.component.ts ***!
  \****************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(location) {
        this.location = location;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.isOpen = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '/article') {
            titlee = titlee.slice(5);
        }
        if (titlee === '/article/article1' || titlee === '/article/article2') {
            return true;
        }
        else {
            return false;
        }
    };
    ArticleComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __importDefault(__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/article/article.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./article.component.scss */ "./src/app/pages/article/article.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/pages/case-study/copacabana/copacabana.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/case-study/copacabana/copacabana.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc2Utc3R1ZHkvY29wYWNhYmFuYS9jb3BhY2FiYW5hLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/case-study/copacabana/copacabana.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/case-study/copacabana/copacabana.component.ts ***!
  \*********************************************************************/
/*! exports provided: CopacabanaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopacabanaComponent", function() { return CopacabanaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var CopacabanaComponent = /** @class */ (function () {
    function CopacabanaComponent() {
    }
    CopacabanaComponent.prototype.ngOnInit = function () {
    };
    CopacabanaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copacabana',
            template: __importDefault(__webpack_require__(/*! raw-loader!./copacabana.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/copacabana/copacabana.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./copacabana.component.scss */ "./src/app/pages/case-study/copacabana/copacabana.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CopacabanaComponent);
    return CopacabanaComponent;
}());



/***/ }),

/***/ "./src/app/pages/case-study/fortaleza/fortaleza.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/case-study/fortaleza/fortaleza.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc2Utc3R1ZHkvZm9ydGFsZXphL2ZvcnRhbGV6YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/case-study/fortaleza/fortaleza.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/case-study/fortaleza/fortaleza.component.ts ***!
  \*******************************************************************/
/*! exports provided: FortalezaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortalezaComponent", function() { return FortalezaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FortalezaComponent = /** @class */ (function () {
    function FortalezaComponent() {
    }
    FortalezaComponent.prototype.ngOnInit = function () {
    };
    FortalezaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fortaleza',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fortaleza.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/case-study/fortaleza/fortaleza.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fortaleza.component.scss */ "./src/app/pages/case-study/fortaleza/fortaleza.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FortalezaComponent);
    return FortalezaComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/dash.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/dash/dash.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home .endorser-logo {\n  width: 150px;\n  height: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW0vd3d3L2NvdmlkL3NyYy9hcHAvcGFnZXMvZGFzaC9kYXNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoL2Rhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0s7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0FUIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaC9kYXNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XG4gICAgIC5lbmRvcnNlci1sb2dve1xuICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICB9XG59IiwiLmhvbWUgLmVuZG9yc2VyLWxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTV2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dash/dash.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/dash/dash.component.ts ***!
  \**********************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ipc_rj_ce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ipc_rj_ce */ "./src/app/pages/dash/ipc_rj_ce.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DashComponent = /** @class */ (function () {
    function DashComponent() {
        this.ipc_rj_ce = _ipc_rj_ce__WEBPACK_IMPORTED_MODULE_1__["ipc_rj_ce"];
        this.dtOptions = {};
    }
    DashComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'numbers',
            pageLength: 5,
            processing: true,
            responsive: true,
            language: {
                processing: "Processando...",
                search: "Buscar:",
                lengthMenu: "Mostrar _MENU_ dados",
                info: "Mostrando desde _START_ até _END_ de _TOTAL_ dados",
                infoEmpty: "Mostrando nenhum dado.",
                infoFiltered: "(filtrado _MAX_ dados total)",
                infoPostFix: "",
                loadingRecords: "Carregando...",
                zeroRecords: "Não existem registros.",
                emptyTable: "Não há dados para essa tabela.",
                paginate: {
                    first: "Primeiro",
                    previous: "Anterior",
                    next: "Seguinte",
                    last: "Último"
                },
                aria: {
                    sortAscending: ": Ative para classificar a tabela em ordem crescente",
                    sortDescending: ": Ative para classificar a tabela em ordem decrescente"
                }
            }
        };
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dash/dash.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dash.component.scss */ "./src/app/pages/dash/dash.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/ipc_rj_ce.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/dash/ipc_rj_ce.ts ***!
  \*****************************************/
/*! exports provided: ipc_rj_ce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipc_rj_ce", function() { return ipc_rj_ce; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ipc_rj_ce = [
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Lagoa",
        ipc: 0.7,
        classIPC: "Muito Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "4,148"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Leblon",
        ipc: 0.69,
        classIPC: "Muito Alto",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "21,385"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Campo dos Afonsos",
        ipc: 0.69,
        classIPC: "Muito Alto",
        idh: 0.89,
        classIDH: "Muito Alto",
        densidade: "420"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Flamengo",
        ipc: 0.69,
        classIPC: "Muito Alto",
        idh: 0.96,
        classIDH: "Muito Alto",
        densidade: "30,398"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Ipanema",
        ipc: 0.69,
        classIPC: "Muito Alto",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "13,856"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Humaitá",
        ipc: 0.68,
        classIPC: "Muito Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "12,599"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Glória",
        ipc: 0.68,
        classIPC: "Alto",
        idh: 0.91,
        classIDH: "Muito Alto",
        densidade: "8,474"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Copacabana",
        ipc: 0.68,
        classIPC: "Alto",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "35,698"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Laranjeiras",
        ipc: 0.68,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "18,269"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Maracanã",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "15,148"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Barra da Tijuca",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "2,823"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Todos os Santos",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.9,
        classIDH: "Muito Alto",
        densidade: "24,338"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Moneró",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "12,441"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jardim Botânico",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.91,
        classIDH: "Muito Alto",
        densidade: "6,697"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Praça da Bandeira",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.91,
        classIDH: "Muito Alto",
        densidade: "12,032"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Zumbi",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "12,513"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jardim Guanabara",
        ipc: 0.67,
        classIPC: "Alto",
        idh: 0.93,
        classIDH: "Muito Alto",
        densidade: "10,048"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Ribeira",
        ipc: 0.66,
        classIPC: "Alto",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "4,093"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vista Alegre",
        ipc: 0.66,
        classIPC: "Alto",
        idh: 0.7,
        classIDH: "Alto",
        densidade: "16,735"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Méier",
        ipc: 0.66,
        classIPC: "Alto",
        idh: 0.89,
        classIDH: "Muito Alto",
        densidade: "20,166"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vila da Penha",
        ipc: 0.65,
        classIPC: "Alto",
        idh: 0.89,
        classIDH: "Muito Alto",
        densidade: "17,737"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Abolição",
        ipc: 0.65,
        classIPC: "Alto",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "18,425"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Botafogo",
        ipc: 0.65,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "17,273"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Rocha",
        ipc: 0.64,
        classIPC: "Alto",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "6,683"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Gávea",
        ipc: 0.64,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "6,204"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Leme",
        ipc: 0.64,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "15,144"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Maria da Graça",
        ipc: 0.64,
        classIPC: "Alto",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "9,663"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Praia da Bandeira",
        ipc: 0.63,
        classIPC: "Alto",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "15,677"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Riachuelo",
        ipc: 0.63,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "13,633"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cachambi",
        ipc: 0.63,
        classIPC: "Alto",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "18,850"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Catete",
        ipc: 0.63,
        classIPC: "Alto",
        idh: 0.87,
        classIDH: "Muito Alto",
        densidade: "35,325"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Joá",
        ipc: 0.63,
        classIPC: "Alto",
        idh: 0.92,
        classIDH: "Muito Alto",
        densidade: "484"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cocotá",
        ipc: 0.62,
        classIPC: "Alto",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "9,951"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Centro",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "5,448"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Parque Anchieta",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.71,
        classIDH: "Alto",
        densidade: "6,711"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Higienópolis",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.85,
        classIDH: "Muito Alto",
        densidade: "13,593"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Brás de Pina",
        ipc: 0.6,
        classIPC: "Alto",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "16,814"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Grajaú",
        ipc: 0.6,
        classIPC: "Alto",
        idh: 0.92,
        classIDH: "Muito Alto",
        densidade: "6,738"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Pechincha",
        ipc: 0.6,
        classIPC: "Médio",
        idh: 0.89,
        classIDH: "Muito Alto",
        densidade: "12,261"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Irajá",
        ipc: 0.6,
        classIPC: "Médio",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "12,889"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Tijuca",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.94,
        classIDH: "Muito Alto",
        densidade: "16,274"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Bento Ribeiro",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.85,
        classIDH: "Muito Alto",
        densidade: "14,387"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vila Valqueire",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.87,
        classIDH: "Muito Alto",
        densidade: "7,627"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vila Kosmos",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "12,028"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Freguesia (Jacarepaguá)",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.91,
        classIDH: "Muito Alto",
        densidade: "6,827"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Ramos",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "14,602"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Encantado",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "14,169"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "cidade Nova",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.9,
        classIDH: "Muito Alto",
        densidade: "5,847"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Rocha Miranda",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.75,
        classIDH: "Alto",
        densidade: "15,307"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Engenho de Dentro",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "11,616"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cacuia",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "5,324"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vila Militar",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "1,226"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jardim Sulacap",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.89,
        classIDH: "Muito Alto",
        densidade: "1,660"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "São Conrado",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.96,
        classIDH: "Muito Alto",
        densidade: "1,692"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Taquara",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "7,733"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Urca",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "3,045"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Padre Miguel",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "13,200"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Pilares",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.64,
        classIDH: "Medio",
        densidade: "14,839"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Anil",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.9,
        classIDH: "Muito Alto",
        densidade: "6,905"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Oswaldo Cruz",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "16,435"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Portuguesa",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "20,108"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jardim América",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "12,779"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Quintino Bocaiúva",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "7,212"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Olaria",
        ipc: 0.56,
        classIPC: "Médio",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "15,587"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Piedade",
        ipc: 0.56,
        classIPC: "Médio",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "11,159"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Ricardo de Albuquerque",
        ipc: 0.56,
        classIPC: "Médio",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "13,846"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Realengo",
        ipc: 0.56,
        classIPC: "Médio",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "6,913"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Bonsucesso",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "8,506"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cordovil",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "11,720"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Curicica",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "9,339"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Recreio dos Bandeirantes",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.87,
        classIDH: "Muito Alto",
        densidade: "2,683"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vila Isabel",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.92,
        classIDH: "Muito Alto",
        densidade: "26,738"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Penha Circular",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.73,
        classIDH: "Alto",
        densidade: "10,342"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Campinho",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "10,316"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Bangu",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "5,977"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Guadalupe",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "12,341"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jardim Carioca",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "15,328"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Engenho da Rainha",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "11,978"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Santo Cristo",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.75,
        classIDH: "Alto",
        densidade: "7,319"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Campo Grande",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "3,144"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cosmos",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.74,
        classIDH: "Alto",
        densidade: "6,838"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Inhaúma",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "13,112"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Saúde",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.68,
        classIDH: "Medio",
        densidade: "7,556"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Tomás Coelho",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "12,976"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Água Santa",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "3,609"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cavalcanti",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.75,
        classIDH: "Alto",
        densidade: "8,389"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Magalhães Bastos",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.68,
        classIDH: "Medio",
        densidade: "12,364"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Pedra de Guaratiba",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "2,609"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Engenho Novo",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "15,945"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vaz Lobo",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.8,
        classIDH: "Alto",
        densidade: "13,773"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Andaraí",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "17,408"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "São Cristóvão",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.71,
        classIDH: "Alto",
        densidade: "6,457"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Tanque",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.71,
        classIDH: "Alto",
        densidade: "6,799"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Santíssimo",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "4,983"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "São Francisco Xavier",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.82,
        classIDH: "Muito Alto",
        densidade: "12,857"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Lins de Vasconcelos",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "14,044"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Senador Camará",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.69,
        classIDH: "Medio",
        densidade: "6,240"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Inhoaíba",
        ipc: 0.5,
        classIPC: "Baixo",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "7,800"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Senador Vasconcelos",
        ipc: 0.5,
        classIPC: "Baixo",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "4,750"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Penha",
        ipc: 0.5,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "13,539"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Madureira",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "13,229"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Paquetá",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "1,970"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cascadura",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.75,
        classIDH: "Alto",
        densidade: "12,137"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Del Castilho",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "10,833"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Santa Teresa",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.9,
        classIDH: "Muito Alto",
        densidade: "7,936"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Coelho Neto",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.78,
        classIDH: "Alto",
        densidade: "12,907"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "cidade de Deus",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "28,684"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Marechal Hermes",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.8,
        classIDH: "Alto",
        densidade: "12,367"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Anchieta",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "12,806"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Freguesia (Ilha do Governador)",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "4,792"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Turiaçu",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.71,
        classIDH: "Alto",
        densidade: "13,733"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "cidade Universitária",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "332"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Paciência",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "3,451"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Sampaio",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "12,319"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Honório Gurgel",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "15,994"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Sepetiba",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "4,868"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Cosme Velho",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "8,042"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Engenheiro Leal",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.75,
        classIDH: "Alto",
        densidade: "8,631"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vigário Geral",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "12,353"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jacaré",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "11,009"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Santa Cruz",
        ipc: 0.46,
        classIPC: "Baixo",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "1,738"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Gardênia Azul",
        ipc: 0.46,
        classIPC: "Baixo",
        idh: 0.74,
        classIDH: "Alto",
        densidade: "14,329"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Deodoro",
        ipc: 0.46,
        classIPC: "Baixo",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "2,336"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Praça Seca",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "9,869"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Pavuna",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "11,713"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Bancários",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "12,793"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vicente de Carvalho",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "13,599"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Gericinó",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.69,
        classIDH: "Medio",
        densidade: "5,985"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Gamboa",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.68,
        classIDH: "Medio",
        densidade: "11,778"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vasco da Gama",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.78,
        classIDH: "Alto",
        densidade: "10,662"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Rio Comprido",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.8,
        classIDH: "Muito Alto",
        densidade: "13,093"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Tauá",
        ipc: 0.43,
        classIPC: "Baixo",
        idh: 0.84,
        classIDH: "Muito Alto",
        densidade: "17,678"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Parque Columbia",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "10,205"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Barra de Guaratiba",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.8,
        classIDH: "Muito Alto",
        densidade: "379"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Camorim",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.78,
        classIDH: "Alto",
        densidade: "222"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Pitangueiras",
        ipc: 0.41,
        classIPC: "Baixo",
        idh: 0.83,
        classIDH: "Muito Alto",
        densidade: "19,459"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Estácio",
        ipc: 0.4,
        classIPC: "Baixo",
        idh: 0.8,
        classIDH: "Muito Alto",
        densidade: "17,533"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Colégio",
        ipc: 0.4,
        classIPC: "Muito Baixo",
        idh: 0.78,
        classIDH: "Alto",
        densidade: "12,934"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vargem Pequena",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "1,887"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jacarepaguá",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.64,
        classIDH: "Medio",
        densidade: "2,076"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Parada de Lucas",
        ipc: 0.37,
        classIPC: "Muito Baixo",
        idh: 0.65,
        classIDH: "Medio",
        densidade: "10,884"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Benfica",
        ipc: 0.37,
        classIPC: "Muito Baixo",
        idh: 0.8,
        classIDH: "Muito Alto",
        densidade: "14,444"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Maré",
        ipc: 0.35,
        classIPC: "Muito Baixo",
        idh: 0.69,
        classIDH: "Medio",
        densidade: "30,400"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Guaratiba",
        ipc: 0.35,
        classIPC: "Muito Baixo",
        idh: 0.72,
        classIDH: "Alto",
        densidade: "789"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Alto da Boa Vista",
        ipc: 0.35,
        classIPC: "Muito Baixo",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "297"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Costa Barros",
        ipc: 0.34,
        classIPC: "Muito Baixo",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "15,672"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Galeão",
        ipc: 0.34,
        classIPC: "Muito Baixo",
        idh: 0.88,
        classIDH: "Muito Alto",
        densidade: "1,212"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Catumbi",
        ipc: 0.31,
        classIPC: "Muito Baixo",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "23,275"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vargem Grande",
        ipc: 0.3,
        classIPC: "Muito Baixo",
        idh: 0.81,
        classIDH: "Muito Alto",
        densidade: "356"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Itanhangá",
        ipc: 0.3,
        classIPC: "Muito Baixo",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "2,911"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Vidigal",
        ipc: 0.26,
        classIPC: "Muito Baixo",
        idh: 0.68,
        classIDH: "Medio",
        densidade: "7,893"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Caju",
        ipc: 0.26,
        classIPC: "Muito Baixo",
        idh: 0.78,
        classIDH: "Alto",
        densidade: "3,829"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Barros Filho",
        ipc: 0.24,
        classIPC: "Muito Baixo",
        idh: 0.7,
        classIDH: "Medio",
        densidade: "8,150"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Manguinhos",
        ipc: 0.22,
        classIPC: "Muito Baixo",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "13,810"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Complexo do Alemão",
        ipc: 0.22,
        classIPC: "Muito Baixo",
        idh: 0.66,
        classIDH: "Medio",
        densidade: "23,352"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Acari",
        ipc: 0.21,
        classIPC: "Muito Baixo",
        idh: 0.66,
        classIDH: "Medio",
        densidade: "17,033"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Rocinha",
        ipc: 0.17,
        classIPC: "Muito Baixo",
        idh: 0.66,
        classIDH: "Medio",
        densidade: "48,258"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Jacarezinho",
        ipc: 0.16,
        classIPC: "Muito Baixo",
        idh: 0.67,
        classIDH: "Medio",
        densidade: "40,089"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Grumari",
        ipc: 0.13,
        classIPC: "Muito Baixo",
        idh: 0.69,
        classIDH: "Medio",
        densidade: "17"
    },
    {
        cidade: "Rio de Janeiro (RJ)",
        bairro: "Mangueira",
        ipc: 0.13,
        classIPC: "Muito Baixo",
        idh: 0.68,
        classIDH: "Medio",
        densidade: "22,346"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Alagadiço",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.59,
        classIDH: "Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Aldeota",
        ipc: 0.6,
        classIPC: "Alto",
        idh: 0.87,
        classIDH: "Muito Alto",
        densidade: "10,918"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Álvaro Weyne",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.36,
        classIDH: "Muito Baixo",
        densidade: "15,413"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Amadeu Furtado",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.59,
        classIDH: "Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Arraial Moura Brasil",
        ipc: 0.32,
        classIPC: "Muito Baixo",
        idh: 0.28,
        classIDH: "Muito Baixo",
        densidade: "8,132"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Barra do Ceará",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "17,041"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Benfica",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.57,
        classIDH: "Baixo",
        densidade: "6,268"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Bom Futuro",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.51,
        classIDH: "Baixo",
        densidade: "19,708"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Carlito Pamplona",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.3,
        classIDH: "Muito Baixo",
        densidade: "22,931"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Centro",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.56,
        classIDH: "Baixo",
        densidade: "5,236"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Cocó",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.76,
        classIDH: "Alto",
        densidade: "6,267"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Cristo Redentor",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.25,
        classIDH: "Muito Baixo",
        densidade: "20,364"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Damas",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.51,
        classIDH: "Baixo",
        densidade: "11,096"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Estância (Dionísio Torres)",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.86,
        classIDH: "Muito Alto",
        densidade: "9,090"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Farias Brito",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.5,
        classIDH: "Muito Baixo",
        densidade: "14,412"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Fátima",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.69,
        classIDH: "Medio",
        densidade: "7,228"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Floresta",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "93,666"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jacarecanga",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.45,
        classIDH: "Muito Baixo",
        densidade: "11,088"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jardim América",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.44,
        classIDH: "Muito Baixo",
        densidade: "17,201"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jardim Guanabara",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.33,
        classIDH: "Muito Baixo",
        densidade: "2,024"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jardim Iracema",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.29,
        classIDH: "Muito Baixo",
        densidade: "17,752"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Joaquim Távora",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.66,
        classIDH: "Medio",
        densidade: "11,964"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "José Bonifácio",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.64,
        classIDH: "Medio",
        densidade: "9,964"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Meireles",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.95,
        classIDH: "Muito Alto",
        densidade: "14,334"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Monte Castelo",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.43,
        classIDH: "Muito Baixo",
        densidade: "15,225"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Mucuripe",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.79,
        classIDH: "Alto",
        densidade: "15,801"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Papicu",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.53,
        classIDH: "Baixo",
        densidade: "8,789"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque Araxá",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.59,
        classIDH: "Baixo",
        densidade: "13,430"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parquelândia",
        ipc: 0.56,
        classIPC: "Médio",
        idh: 0.63,
        classIDH: "Medio",
        densidade: "10,612"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parreão",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.57,
        classIDH: "Baixo",
        densidade: "5,091"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Pirambu",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.23,
        classIDH: "Muito Baixo",
        densidade: "25,649"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Praia de Iracema",
        ipc: 0.58,
        classIPC: "Médio",
        idh: 0.72,
        classIDH: "Alto",
        densidade: "6,137"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Presidente Kennedy",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.43,
        classIDH: "Muito Baixo",
        densidade: "13,070"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Rodolfo Teófilo",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.48,
        classIDH: "Muito Baixo",
        densidade: "10,678"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "São João do Tauape",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.49,
        classIDH: "Muito Baixo",
        densidade: "11,084"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Varjota",
        ipc: 0.61,
        classIPC: "Alto",
        idh: 0.72,
        classIDH: "Alto",
        densidade: "15,889"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Vicente Pinzon",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.33,
        classIDH: "Muito Baixo",
        densidade: "14,827"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Vila Ellery",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.42,
        classIDH: "Muito Baixo",
        densidade: "15,323"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Vila Velha",
        ipc: 0.47,
        classIPC: "Baixo",
        idh: 0.27,
        classIDH: "Muito Baixo",
        densidade: "7,900"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Antônio Bezerra",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.35,
        classIDH: "Muito Baixo",
        densidade: "11,055"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Autran Nunes",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.18,
        classIDH: "Muito Baixo",
        densidade: "18,936"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Conjunto Ceará I",
        ipc: 0.5,
        classIPC: "Baixo",
        idh: 0.36,
        classIDH: "Muito Baixo",
        densidade: "12,243"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Dom Lustosa",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.32,
        classIDH: "Muito Baixo",
        densidade: "9,739"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Genibaú",
        ipc: 0.41,
        classIPC: "Baixo",
        idh: 0.14,
        classIDH: "Muito Baixo",
        densidade: "21,922"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Henrique Jorge",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.34,
        classIDH: "Muito Baixo",
        densidade: "14,914"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "João XXIII",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.28,
        classIDH: "Muito Baixo",
        densidade: "13,048"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Pe. Andrade (Cachoeirinha)",
        ipc: 0.5,
        classIPC: "Baixo",
        idh: 0.36,
        classIDH: "Muito Baixo",
        densidade: "9,951"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Quintino Cunha",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "16,081"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "José de Alencar",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.38,
        classIDH: "Muito Baixo",
        densidade: "5,092"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Ancuri",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.2,
        classIDH: "Muito Baixo",
        densidade: "3,502"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Barroso",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.19,
        classIDH: "Muito Baixo",
        densidade: "8,111"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Cajazeiras",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.3,
        classIDH: "Muito Baixo",
        densidade: "4,371"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Cambeba",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.52,
        classIDH: "Baixo",
        densidade: "3,031"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "cidade dos Funcionários",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.57,
        classIDH: "Baixo",
        densidade: "5,519"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Coaçu",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.26,
        classIDH: "Muito Baixo",
        densidade: "4,291"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Curió",
        ipc: 0.31,
        classIPC: "Muito Baixo",
        idh: 0.19,
        classIDH: "Muito Baixo",
        densidade: "8,255"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Edson Queiroz",
        ipc: 0.4,
        classIPC: "Baixo",
        idh: 0.35,
        classIDH: "Muito Baixo",
        densidade: "13,881"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Eng. Luciano Cavalcante",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.52,
        classIDH: "Baixo",
        densidade: "4,048"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Guajeru",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.29,
        classIDH: "Muito Baixo",
        densidade: "6,839"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Guararapes",
        ipc: 0.59,
        classIPC: "Médio",
        idh: 0.77,
        classIDH: "Alto",
        densidade: "3,901"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jangurussu",
        ipc: 0.43,
        classIPC: "Baixo",
        idh: 0.17,
        classIDH: "Muito Baixo",
        densidade: "32,400"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jardim das Oliveiras",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.27,
        classIDH: "Muito Baixo",
        densidade: "11,034"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Lagoa Redonda",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.25,
        classIDH: "Muito Baixo",
        densidade: "15,340"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Lagoa da Sapiranga (Coité)",
        ipc: 0.4,
        classIPC: "Baixo",
        idh: 0.34,
        classIDH: "Muito Baixo",
        densidade: "8,141"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Messejana (sede)",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.38,
        classIDH: "Muito Baixo",
        densidade: "6,222"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque Iracema",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.5,
        classIDH: "Baixo",
        densidade: "3,110"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque Manibura",
        ipc: 0.55,
        classIPC: "Médio",
        idh: 0.58,
        classIDH: "Baixo",
        densidade: "4,141"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Paupina",
        ipc: 0.33,
        classIPC: "Muito Baixo",
        idh: 0.25,
        classIDH: "Muito Baixo",
        densidade: "1,752"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Pedras",
        ipc: 0.33,
        classIPC: "Muito Baixo",
        idh: 0.26,
        classIDH: "Muito Baixo",
        densidade: "432"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Sabiaguaba",
        ipc: 0.34,
        classIPC: "Muito Baixo",
        idh: 0.27,
        classIDH: "Muito Baixo",
        densidade: "2"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Salinas",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.49,
        classIDH: "Muito Baixo",
        densidade: "1,679"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Bom Jardim",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.19,
        classIDH: "Muito Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Bonsucesso",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.26,
        classIDH: "Muito Baixo",
        densidade: "15,488"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Canindezinho",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.14,
        classIDH: "Muito Baixo",
        densidade: "12,190"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Conjunto Ceará II",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.36,
        classIDH: "Muito Baixo",
        densidade: "12,936"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Conjunto Esperança",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.29,
        classIDH: "Muito Baixo",
        densidade: "14,914"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Dendê",
        ipc: 0.54,
        classIPC: "Médio",
        idh: 0.18,
        classIDH: "Muito Baixo",
        densidade: "2,444"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Granja Lisboa",
        ipc: 0.41,
        classIPC: "Baixo",
        idh: 0.17,
        classIDH: "Muito Baixo",
        densidade: "8,407"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Granja Portugal",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.19,
        classIDH: "Muito Baixo",
        densidade: "10,953"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jardim Cearense",
        ipc: 0.46,
        classIPC: "Baixo",
        idh: 0.32,
        classIDH: "Muito Baixo",
        densidade: "9,102"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Manoel Sátiro",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.29,
        classIDH: "Muito Baixo",
        densidade: "12,362"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Maraponga",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.39,
        classIDH: "Muito Baixo",
        densidade: "6,045"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Mondubim (Sede)",
        ipc: 0.43,
        classIPC: "Baixo",
        idh: 0.23,
        classIDH: "Muito Baixo",
        densidade: "5,955"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque Dois Irmãos",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.25,
        classIDH: "Muito Baixo",
        densidade: "6,052"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque Presidente Vargas",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.14,
        classIDH: "Muito Baixo",
        densidade: "5,101"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parque São José",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.28,
        classIDH: "Muito Baixo",
        densidade: "19,785"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "P. Santa Rosa (Apolo XI)",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.24,
        classIDH: "Muito Baixo",
        densidade: "13,463"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Passaré",
        ipc: 0.43,
        classIPC: "Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "6,821"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Prefeito José Walter",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.4,
        classIDH: "Muito Baixo",
        densidade: "2,558"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Siqueira",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.15,
        classIDH: "Muito Baixo",
        densidade: "11,285"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Aerolândia",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.31,
        classIDH: "Muito Baixo",
        densidade: "16,681"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Aeroporto (Base Aérea)",
        ipc: 0.38,
        classIPC: "Muito Baixo",
        idh: 0.18,
        classIDH: "Muito Baixo",
        densidade: "1,185"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Alto da Balança",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.35,
        classIDH: "Muito Baixo",
        densidade: "15,075"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Bela Vista",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.38,
        classIDH: "Muito Baixo",
        densidade: "17,636"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Castelão",
        ipc: 0.43,
        classIPC: "Baixo",
        idh: 0.26,
        classIDH: "Muito Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Couto Fernandes",
        ipc: 0.29,
        classIPC: "Muito Baixo",
        idh: 0.36,
        classIDH: "Muito Baixo",
        densidade: "14,775"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Demócrito Rocha",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.37,
        classIDH: "Muito Baixo",
        densidade: "12,843"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Dias Macedo",
        ipc: 0.45,
        classIPC: "Baixo",
        idh: 0.27,
        classIDH: "Muito Baixo",
        densidade: "4,749"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Itaóca",
        ipc: 0.5,
        classIPC: "Médio",
        idh: 0.37,
        classIDH: "Muito Baixo",
        densidade: "15,596"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Itaperi",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.37,
        classIDH: "Muito Baixo",
        densidade: "9,209"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Jóquei Club (São Cristóvão)",
        ipc: 0.53,
        classIPC: "Médio",
        idh: 0.41,
        classIDH: "Muito Baixo",
        densidade: "11,371"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Mata Galinha",
        ipc: 0.48,
        classIPC: "Baixo",
        idh: 0.31,
        classIDH: "Muito Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Montese",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.47,
        classIDH: "Muito Baixo",
        densidade: "13,625"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Pan-Americano",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.37,
        classIDH: "Muito Baixo",
        densidade: "15,657"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Parangaba",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.42,
        classIDH: "Muito Baixo",
        densidade: "7,949"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Pici (Parque Universitário)",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "10,840"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Serrinha",
        ipc: 0.46,
        classIPC: "Baixo",
        idh: 0.28,
        classIDH: "Muito Baixo",
        densidade: "16,795"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Vila Pery",
        ipc: 0.49,
        classIPC: "Baixo",
        idh: 0.34,
        classIDH: "Muito Baixo",
        densidade: "13,708"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Vila União",
        ipc: 0.52,
        classIPC: "Médio",
        idh: 0.47,
        classIDH: "Muito Baixo",
        densidade: "7,070"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Cais do Porto",
        ipc: 0.33,
        classIPC: "Muito Baixo",
        idh: 0.22,
        classIDH: "Muito Baixo",
        densidade: "8,743"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "cidade 2000",
        ipc: 0.51,
        classIPC: "Médio",
        idh: 0.56,
        classIDH: "Baixo",
        densidade: "16,882"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Manuel Dias Branco",
        ipc: 0.44,
        classIPC: "Baixo",
        idh: 0.34,
        classIDH: "Muito Baixo",
        densidade: "325"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Praia do Futuro I",
        ipc: 0.37,
        classIPC: "Muito Baixo",
        idh: 0.29,
        classIDH: "Muito Baixo",
        densidade: "4,093"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Praia do Futuro II",
        ipc: 0.41,
        classIPC: "Baixo",
        idh: 0.17,
        classIDH: "Muito Baixo",
        densidade: "3,702"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "De Lourdes",
        ipc: 0.57,
        classIPC: "Médio",
        idh: 0.64,
        classIDH: "Medio",
        densidade: "2,496"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Planalto Ayrton Senna",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.17,
        classIDH: "Muito Baixo",
        densidade: "12,026"
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Gentilândia",
        ipc: 0.6,
        classIPC: "Médio",
        idh: 0.66,
        classIDH: "Medio",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "Conjunto Palmeiras",
        ipc: 0.42,
        classIPC: "Baixo",
        idh: 0.12,
        classIDH: "Muito Baixo",
        densidade: "SR "
    },
    {
        cidade: "Fortaleza (CE)",
        bairro: "São Bento",
        ipc: 0.39,
        classIPC: "Muito Baixo",
        idh: 0.2,
        classIDH: "Muito Baixo",
        densidade: "5,389"
    }
];


/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/how-to-act/how-to-act.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/how-to-act/how-to-act.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdy10by1hY3QvaG93LXRvLWFjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/how-to-act/how-to-act.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/how-to-act/how-to-act.component.ts ***!
  \**********************************************************/
/*! exports provided: HowToActComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToActComponent", function() { return HowToActComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HowToActComponent = /** @class */ (function () {
    function HowToActComponent() {
    }
    HowToActComponent.prototype.ngOnInit = function () {
    };
    HowToActComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-to-act',
            template: __importDefault(__webpack_require__(/*! raw-loader!./how-to-act.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-to-act/how-to-act.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./how-to-act.component.scss */ "./src/app/pages/how-to-act/how-to-act.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HowToActComponent);
    return HowToActComponent;
}());



/***/ }),

/***/ "./src/app/pages/howtouse/howtouse.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/howtouse/howtouse.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvd3RvdXNlL2hvd3RvdXNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/howtouse/howtouse.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/howtouse/howtouse.component.ts ***!
  \******************************************************/
/*! exports provided: HowtouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtouseComponent", function() { return HowtouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HowtouseComponent = /** @class */ (function () {
    function HowtouseComponent() {
        this.src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        this.page = 1;
        this.isLoaded = false;
    }
    HowtouseComponent.prototype.afterLoadComplete = function (pdfData) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    };
    HowtouseComponent.prototype.nextPage = function () {
        this.page++;
        console.log("next page");
    };
    HowtouseComponent.prototype.prevPage = function () {
        this.page--;
        console.log("previous page");
    };
    HowtouseComponent.prototype.ngOnInit = function () {
    };
    HowtouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-howtouse',
            template: __importDefault(__webpack_require__(/*! raw-loader!./howtouse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/howtouse/howtouse.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./howtouse.component.scss */ "./src/app/pages/howtouse/howtouse.component.scss")).default]
        })
    ], HowtouseComponent);
    return HowtouseComponent;
}());



/***/ }),

/***/ "./src/app/pages/methodology/methodology.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/methodology/methodology.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21ldGhvZG9sb2d5L21ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/methodology/methodology.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/methodology/methodology.component.ts ***!
  \************************************************************/
/*! exports provided: MethodologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodologyComponent", function() { return MethodologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MethodologyComponent = /** @class */ (function () {
    function MethodologyComponent() {
    }
    MethodologyComponent.prototype.ngOnInit = function () {
    };
    MethodologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-methodology',
            template: __importDefault(__webpack_require__(/*! raw-loader!./methodology.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/methodology/methodology.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./methodology.component.scss */ "./src/app/pages/methodology/methodology.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MethodologyComponent);
    return MethodologyComponent;
}());



/***/ }),

/***/ "./src/app/pages/notes/notes.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/notes/notes.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGVzL25vdGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/notes/notes.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/notes/notes.component.ts ***!
  \************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NotesComponent = /** @class */ (function () {
    function NotesComponent(location) {
        this.location = location;
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent.prototype.isOpen = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '/notes') {
            titlee = titlee.slice(5);
        }
        if (titlee === '/notes/note1' || titlee === '/notes/note2') {
            return true;
        }
        else {
            return false;
        }
    };
    NotesComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./notes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notes/notes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./notes.component.scss */ "./src/app/pages/notes/notes.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var angular2_cookie_law__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-cookie-law */ "./node_modules/angular2-cookie-law/__ivy_ngcc__/fesm5/angular2-cookie-law.js");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/pages/dash/dash.component.ts");
/* harmony import */ var _howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./howtouse/howtouse.component */ "./src/app/pages/howtouse/howtouse.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/pages/article/article.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/pages/notes/notes.component.ts");
/* harmony import */ var _publicity_publicity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./publicity/publicity.component */ "./src/app/pages/publicity/publicity.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/pages/publications/publications.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _case_study_copacabana_copacabana_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./case-study/copacabana/copacabana.component */ "./src/app/pages/case-study/copacabana/copacabana.component.ts");
/* harmony import */ var _case_study_fortaleza_fortaleza_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./case-study/fortaleza/fortaleza.component */ "./src/app/pages/case-study/fortaleza/fortaleza.component.ts");
/* harmony import */ var _how_to_act_how_to_act_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./how-to-act/how-to-act.component */ "./src/app/pages/how-to-act/how-to-act.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/pages/partners/partners.component.ts");
/* harmony import */ var _methodology_methodology_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./methodology/methodology.component */ "./src/app/pages/methodology/methodology.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_5__["PdfViewerModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angular2_cookie_law__WEBPACK_IMPORTED_MODULE_8__["CookieLawModule"],
            ],
            declarations: [
                _dash_dash_component__WEBPACK_IMPORTED_MODULE_9__["DashComponent"],
                _howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_10__["HowtouseComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_12__["AboutusComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_13__["NotesComponent"],
                _publicity_publicity_component__WEBPACK_IMPORTED_MODULE_14__["PublicityComponent"],
                _publications_publications_component__WEBPACK_IMPORTED_MODULE_15__["PublicationsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _case_study_copacabana_copacabana_component__WEBPACK_IMPORTED_MODULE_17__["CopacabanaComponent"],
                _case_study_fortaleza_fortaleza_component__WEBPACK_IMPORTED_MODULE_18__["FortalezaComponent"],
                _how_to_act_how_to_act_component__WEBPACK_IMPORTED_MODULE_19__["HowToActComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_20__["StatisticsComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_21__["PartnersComponent"],
                _methodology_methodology_component__WEBPACK_IMPORTED_MODULE_22__["MethodologyComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/partners/partners.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/partners/partners.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/partners/partners.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/partners/partners.component.ts ***!
  \******************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __importDefault(__webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/partners/partners.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./partners.component.scss */ "./src/app/pages/partners/partners.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/pages/publications/publications.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/publications/publications.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/publications/publications.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/publications/publications.component.ts ***!
  \**************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent(location) {
        this.location = location;
    }
    PublicationsComponent.prototype.ngOnInit = function () {
    };
    PublicationsComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    PublicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publications',
            template: __importDefault(__webpack_require__(/*! raw-loader!./publications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publications/publications.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./publications.component.scss */ "./src/app/pages/publications/publications.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/publicity/publicity.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/publicity/publicity.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1YmxpY2l0eS9wdWJsaWNpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/publicity/publicity.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/publicity/publicity.component.ts ***!
  \********************************************************/
/*! exports provided: PublicityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicityComponent", function() { return PublicityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PublicityComponent = /** @class */ (function () {
    function PublicityComponent() {
    }
    PublicityComponent.prototype.ngOnInit = function () {
    };
    PublicityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-publicity',
            template: __importDefault(__webpack_require__(/*! raw-loader!./publicity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicity/publicity.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./publicity.component.scss */ "./src/app/pages/publicity/publicity.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PublicityComponent);
    return PublicityComponent;
}());



/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    StatisticsComponent.prototype.ngOnInit = function () {
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./statistics.component.scss */ "./src/app/pages/statistics/statistics.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/publications/article1/article1.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/publications/article1/article1.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9hcnRpY2xlMS9hcnRpY2xlMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/article1/article1.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/publications/article1/article1.component.ts ***!
  \*************************************************************/
/*! exports provided: Article1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article1Component", function() { return Article1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Article1Component = /** @class */ (function () {
    function Article1Component() {
        this.src = "https://zecopol.github.io/zecopol/Artigo_SimulandoEvolucaoDaTransmissao.pdf";
        this.page = 1;
        this.isLoaded = false;
    }
    Article1Component.prototype.afterLoadComplete = function (pdfData) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    };
    Article1Component.prototype.nextPage = function () {
        this.page++;
        // console.log("next page");
    };
    Article1Component.prototype.prevPage = function () {
        this.page--;
        // console.log("previous page");
    };
    Article1Component.prototype.ngOnInit = function () {
    };
    Article1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article1',
            template: __importDefault(__webpack_require__(/*! raw-loader!./article1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article1/article1.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./article1.component.scss */ "./src/app/publications/article1/article1.component.scss")).default]
        })
    ], Article1Component);
    return Article1Component;
}());



/***/ }),

/***/ "./src/app/publications/article2/article2.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/publications/article2/article2.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9hcnRpY2xlMi9hcnRpY2xlMi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/article2/article2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/publications/article2/article2.component.ts ***!
  \*************************************************************/
/*! exports provided: Article2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article2Component", function() { return Article2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Article2Component = /** @class */ (function () {
    function Article2Component() {
    }
    Article2Component.prototype.ngOnInit = function () {
    };
    Article2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article2',
            template: __importDefault(__webpack_require__(/*! raw-loader!./article2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/article2/article2.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./article2.component.scss */ "./src/app/publications/article2/article2.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], Article2Component);
    return Article2Component;
}());



/***/ }),

/***/ "./src/app/publications/note1/note1.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/publications/note1/note1.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9ub3RlMS9ub3RlMS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/note1/note1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/publications/note1/note1.component.ts ***!
  \*******************************************************/
/*! exports provided: Note1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note1Component", function() { return Note1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Note1Component = /** @class */ (function () {
    function Note1Component() {
    }
    Note1Component.prototype.ngOnInit = function () {
    };
    Note1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note1',
            template: __importDefault(__webpack_require__(/*! raw-loader!./note1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note1/note1.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./note1.component.scss */ "./src/app/publications/note1/note1.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], Note1Component);
    return Note1Component;
}());



/***/ }),

/***/ "./src/app/publications/note2/note2.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/publications/note2/note2.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9ub3RlMi9ub3RlMi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/note2/note2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/publications/note2/note2.component.ts ***!
  \*******************************************************/
/*! exports provided: Note2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note2Component", function() { return Note2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Note2Component = /** @class */ (function () {
    function Note2Component() {
    }
    Note2Component.prototype.ngOnInit = function () {
    };
    Note2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note2',
            template: __importDefault(__webpack_require__(/*! raw-loader!./note2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note2/note2.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./note2.component.scss */ "./src/app/publications/note2/note2.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], Note2Component);
    return Note2Component;
}());



/***/ }),

/***/ "./src/app/publications/note3/note3.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/publications/note3/note3.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9ub3RlMy9ub3RlMy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/note3/note3.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/publications/note3/note3.component.ts ***!
  \*******************************************************/
/*! exports provided: Note3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note3Component", function() { return Note3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Note3Component = /** @class */ (function () {
    function Note3Component() {
        this.src = "./assets/articles/Artigo_IVC_21052020.pdf";
        this.page = 1;
        this.isLoaded = false;
    }
    Note3Component.prototype.afterLoadComplete = function (pdfData) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    };
    Note3Component.prototype.nextPage = function () {
        this.page++;
        // console.log("next page");
    };
    Note3Component.prototype.prevPage = function () {
        this.page--;
        // console.log("previous page");
    };
    Note3Component.prototype.ngOnInit = function () {
    };
    Note3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note3',
            template: __importDefault(__webpack_require__(/*! raw-loader!./note3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note3/note3.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./note3.component.scss */ "./src/app/publications/note3/note3.component.scss")).default]
        })
    ], Note3Component);
    return Note3Component;
}());



/***/ }),

/***/ "./src/app/publications/note4/note4.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/publications/note4/note4.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9ucy9ub3RlNC9ub3RlNC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/publications/note4/note4.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/publications/note4/note4.component.ts ***!
  \*******************************************************/
/*! exports provided: Note4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note4Component", function() { return Note4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var Note4Component = /** @class */ (function () {
    function Note4Component() {
        this.src = "./assets/articles/3105_NotaTecnica.pdf";
        this.page = 1;
        this.isLoaded = false;
    }
    Note4Component.prototype.afterLoadComplete = function (pdfData) {
        this.totalPages = pdfData.numPages;
        this.isLoaded = true;
    };
    Note4Component.prototype.nextPage = function () {
        this.page++;
    };
    Note4Component.prototype.prevPage = function () {
        this.page--;
    };
    Note4Component.prototype.ngOnInit = function () {
    };
    Note4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note4',
            template: __importDefault(__webpack_require__(/*! raw-loader!./note4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publications/note4/note4.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./note4.component.scss */ "./src/app/publications/note4/note4.component.scss")).default]
        })
    ], Note4Component);
    return Note4Component;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pam/www/covid/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
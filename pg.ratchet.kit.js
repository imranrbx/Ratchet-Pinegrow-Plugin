$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("pg.ratchet.1.1", "Ratchet Mobile Kit");

        f.type = "pg.ratchet.kit";
        f.allow_single_type = true;
        f.info_badge = 'New';

        f.description = '<a href="http://goratchet.com/">RatChet Mobile Kit</a> properties and components.';
        f.author = 'Imran Qasim';
        f.author_link = 'http://perfectwebsolutions.info/';

        f.setScriptFileByScriptTagId('plugin-pg-ratchet-kit'); //get url if script is included directly into edit.html

        //Don't show these files in CSS tab
        f.ignore_css_files = [/ratchet/i];

        //Auto detect if font-awesome css is included
        f.detect = function(pgPage) {
            return pgPage.hasStylesheet(/ratchet/i);
        }



        var pb = new PgPluginBuilder(f);

        //var page = pb.readFile(source + '/components-documentation.html');


        //pb.addSourceComponent(page, '.btn', 'Button', null, section);

        //BUTTONS
        var section = pb.addSection('Title Section');

        //Default Title Bar
        pb.add('Title bar', '<header class="bar bar-nav">\
                                <h1 class="title">Title</h1>\
                              </header>', null, section);

        //Title bar with buttons
        pb.add('Title bar with buttons', '<header class="bar bar-nav">\
                                              <button class="btn pull-left">Left</button>\
                                              <button class="btn pull-right">Right</button>\
                                              <h1 class="title">Title</h1>\
                                          </header>', null, section);
        //Title bar with icons
        pb.add('Title bar with icons', '<header class="bar bar-nav">\
                                            <a class="icon icon-left-nav pull-left"></a>\
                                            <a class="icon icon-compose pull-right"></a>\
                                            <h1 class="title">Title</h1>\
                                        </header>', null, section);
          //Title bar with link buttons and icons
        pb.add('Title bar with link buttons and icons', '<header class="bar bar-nav">\
                                                            <button class="btn btn-link btn-nav pull-left">\
                                                                <span class="icon icon-left-nav"></span>Left\
                                                            </button>\
                                                            <button class="btn btn-link btn-nav pull-right">\
                                                              Right <span class="icon icon-right-nav"></span>\
                                                            </button>\
                                                            <h1 class="title">Title</h1>\
                                                        </header>', null, section);
          //Title bar with segmented control
        pb.add('Title bar with segmented control', '<header class="bar bar-nav">\
                                                      <button class="btn pull-left">\
                                                        Left\
                                                      </button>\
                                                      <button class="btn pull-right">\
                                                        Right\
                                                      </button>\
                                                      <div class="segmented-control">\
                                                        <a href="#item1mobile" class="control-item active">One</a>\
                                                        <a href="#item2mobile" class="control-item">Two</a>\
                                                        <a href="#item1mobile" class="control-item">Three</a>\
                                                      </div>\
                                                    </header>', null, section);
      pb.add('Segmented control', '<div class="card">\
                                        <span id="item1mobile" class="control-content active">Item 1</span>\
                                        <span id="item2mobile" class="control-content">Item 2</span>\
                                        <span id="item3mobile" class="control-content">Item 3</span>\
                                      </div>', null, section);
   
        var section = pb.addSection('Footer Section');
            //Tab bar
        pb.add('Tab bar', '<nav class="bar bar-tab">\
                            <a class="tab-item active" href="#">\
                              <span class="icon icon-home"></span>\
                              <span class="tab-label">Home</span>\
                            </a>\
                            <a class="tab-item" href="#">\
                              <span class="icon icon-person"></span>\
                              <span class="tab-label">Profile</span>\
                            </a>\
                            <a class="tab-item" href="#">\
                              <span class="icon icon-star-filled"></span>\
                              <span class="tab-label">Favorites</span>\
                            </a>\
                            <a class="tab-item" href="#">\
                              <span class="icon icon-search"></span>\
                              <span class="tab-label">Search</span>\
                            </a>\
                            <a class="tab-item" href="#">\
                              <span class="icon icon-gear"></span>\
                              <span class="tab-label">Settings</span>\
                            </a>\
                          </nav>', null, section);
   pb.add('Tab bar (labels only)', '<nav class="bar bar-tab">\
                                      <a class="tab-item active" href="#">\
                                        Label\
                                      </a>\
                                      <a class="tab-item" href="#">\
                                        Label\
                                      </a>\
                                      <a class="tab-item" href="#">\
                                        Label\
                                      </a>\
                                    </nav>', null, section);
    var section = pb.addSection('Standard Bar Section');
     pb.add('Standard bars below topbar', '<div class="bar bar-standard bar-header-secondary">\
                                <button class="btn btn-block">Block level button</button>\
                              </div>', null, section);
          pb.add('Standard bars above footer', '<div class="bar bar-standard bar-footer-secondary">\
                                                  <button class="btn btn-block">Block level button</button>\
                                                </div>', null, section);
      var section = pb.addSection('Content Section');
      pb.add('Standard bars below topbar', '<div class="content">\
                                              <h1>h1. Heading</h1>\
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
                                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
                                              quis nostrud exercitation ullamco.</p>\
                                            </div>', null, section);
       pb.add('Table views', '<ul class="table-view">\
                                <li class="table-view-cell">Item 1</li>\
                                <li class="table-view-cell table-view-cell">Item 2</li>\
                                <li class="table-view-divider">Divider</li>\
                                <li class="table-view-cell">Item 3</li>\
                              </ul>', null, section);
      pb.add('Table view with chevrons', '<ul class="table-view">\
                                            <li class="table-view-cell">\
                                              <a class="navigate-right">\
                                                Item 1\
                                              </a>\
                                            </li>\
                                            <li class="table-view-cell">\
                                              <a class="navigate-right">\
                                                Item 2\
                                              </a>\
                                            </li>\
                                            <li class="table-view-cell">\
                                              <a class="navigate-right">\
                                                Item 3\
                                              </a>\
                                            </li>\
                                          </ul>', null, section);
      pb.add('Table view with badges', '<ul class="table-view">\
                                          <li class="table-view-cell">Item 1 <span class="badge">4</span></li>\
                                          <li class="table-view-cell">Item 2 <span class="badge">1</span></li>\
                                          <li class="table-view-cell">Item 3 <span class="badge">5</span></li>\
                                        </ul>', null, section);
      pb.add('Table view with badges and chevrons', '<ul class="table-view">\
                                                        <li class="table-view-cell">\
                                                          <a class="navigate-right">\
                                                            <span class="badge">5</span>\
                                                            Item 1\
                                                          </a>\
                                                        </li>\
                                                        <li class="table-view-cell">\
                                                          <a class="navigate-right">\
                                                            <span class="badge">5</span>\
                                                            Item 2\
                                                          </a>\
                                                        </li>\
                                                        <li class="table-view-cell">\
                                                          <a class="navigate-right">\
                                                            <span class="badge">5</span>\
                                                            Item 3\
                                                          </a>\
                                                        </li>\
                                                      </ul>', null, section);
      pb.add('Table view with media (images)', '<ul class="table-view">\
                                                  <li class="table-view-cell media">\
                                                    <a class="navigate-right">\
                                                      <img class="media-object pull-left" src="http://placehold.it/42x42">\
                                                      <div class="media-body">\
                                                        Item 1\
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
                                                        sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>\
                                                      </div>\
                                                    </a>\
                                                  </li>\
                                                  <li class="table-view-cell media">\
                                                    <a class="navigate-right">\
                                                      <img class="media-object pull-left" src="http://placehold.it/42x42">\
                                                      <div class="media-body">\
                                                        Item 1\
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
                                                        sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>\
                                                      </div>\
                                                    </a>\
                                                  </li>\
                                                  <li class="table-view-cell media">\
                                                    <a class="navigate-right">\
                                                      <img class="media-object pull-left" src="http://placehold.it/42x42">\
                                                      <div class="media-body">\
                                                        Item 1\
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
                                                        sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.</p>\
                                                      </div>\
                                                    </a>\
                                                  </li>\
                                                </ul>', null, section);
   pb.add('Table view with media (icons)', '<ul class="table-view">\
                                              <li class="table-view-cell media">\
                                                <a class="navigate-right">\
                                                  <span class="media-object pull-left icon icon-trash"></span>\
                                                  <div class="media-body">\
                                                    Item 1\
                                                  </div>\
                                                </a>\
                                              </li>\
                                              <li class="table-view-cell media">\
                                                <a class="navigate-right">\
                                                  <span class="media-object pull-left icon icon-gear"></span>\
                                                  <div class="media-body">\
                                                    Item 2\
                                                  </div>\
                                                </a>\
                                              </li>\
                                              <li class="table-view-cell media">\
                                                <a class="navigate-right">\
                                                  <span class="media-object pull-left icon icon-pages"></span>\
                                                  <div class="media-body">\
                                                    Item 3\
                                                  </div>\
                                                </a>\
                                              </li>\
                                            </ul>', null, section);
   pb.add('Table view with buttons', '<ul class="table-view">\
                                        <li class="table-view-cell">Item 1 <button class="btn">Button</button></li>\
                                        <li class="table-view-cell">Item 2 <button class="btn btn-primary">Button</button></li>\
                                        <li class="table-view-cell">Item 3 <button class="btn btn-positive">Button</button></li>\
                                        <li class="table-view-cell">Item 4 <button class="btn btn-negative">Button</button></li>\
                                      </ul>', null, section);
      pb.add('Table view with toggles', '<ul class="table-view">\
                                          <li class="table-view-cell">\
                                            Item 1\
                                            <div class="toggle">\
                                              <div class="toggle-handle"></div>\
                                            </div>\
                                          </li>\
                                          <li class="table-view-cell">\
                                            Item 2\
                                            <div class="toggle active">\
                                              <div class="toggle-handle"></div>\
                                            </div>\
                                          </li>\
                                          <li class="table-view-cell">\
                                            Item 3\
                                            <div class="toggle">\
                                              <div class="toggle-handle"></div>\
                                            </div>\
                                          </li>\
                                        </ul>', null, section);
   var section = pb.addSection('Default Buttons');
   pb.add('Default', '<button class="btn">Button</button>', null, section);
   pb.add('Primary', '<button class="btn btn-primary">Button</button>', null, section);
     pb.add('Positive', '<button class="btn btn-positive">Button</button>', null, section);
      pb.add('Negative', '<button class="btn btn-negative">Button</button>', null, section);
       pb.add('Link', '<button class="btn btn-link">Button</button>', null, section);
        pb.add('Outline', '<button class="btn btn-outlined">Button</button>', null, section);
         pb.add('Primary Outline', '<button class="btn btn-primary btn-outlined">Button</button>', null, section);
          pb.add('Postive Outline', '<button class="btn btn-positive btn-outlined">Button</button>', null, section);
          pb.add('Negative Outline', '<button class="btn btn-negative btn-outlined">Button</button>', null, section);
              pb.add('Popup Modal', '<a href="#myModalexample" class="btn">Open modal</a>', null, section);
  var section = pb.addSection('Buttons with Icons');
    pb.add('Default', '<button class="btn">\
                                  <span class="icon icon-search"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Primary', '<button class="btn btn-primary">\
                                  <span class="icon icon-search"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Positive', '<button class="btn btn-positive">\
                                  <span class="icon icon-search"></span>\
                                  Button\
                                </button>', null, section);
     pb.add('Negative', '<button class="btn btn-negative">\
                                  <span class="icon icon-search"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Link', '<button class="btn btn-link">\
                                    <span class="icon icon-search"></span>\
                                    Button\
                                  </button>', null, section);
//Button section with Badges
      var section = pb.addSection('Buttons with Badges');
    pb.add('Default', '<button class="btn">\
                                  <span class="badge"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Primary', '<button class="btn btn-primary">\
                                  <span class="badge badge-primary"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Positive', '<button class="btn btn-positive">\
                                  <span class="badge badge-positive"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Negative', '<button class="btn btn-negative">\
                                  <span class="badge badge-negative"></span>\
                                  Button\
                                </button>', null, section);
    pb.add('Link', '<button class="btn btn-link">\
                                    <span class="badge badge-link"></span>\
                                    Button\
                                  </button>', null, section);

//Forms section
 var section = pb.addSection('Forms Section');
     pb.add('Default', '<form>\
                      <input type="text" placeholder="Full name">\
                      <input type="search" placeholder="Search">\
                      <textarea rows="5"></textarea>\
                      <button class="btn btn-positive btn-block">Choose existing</button>\
                    </form>', null, section);
      pb.add('Input Group', '<form class="input-group">\
                          <input type="text" placeholder="Full name">\
                          <input type="email" placeholder="Email">\
                          <input type="text" placeholder="Username">\
                        </form>', null, section);
      pb.add('Input Group and Labels', '<form class="input-group">\
                                          <div class="input-row">\
                                            <label>Full name</label>\
                                            <input type="text" placeholder="Mister Ratchet">\
                                          </div>\
                                          <div class="input-row">\
                                            <label>Email</label>\
                                            <input type="email" placeholder="ratchetframework@gmail.com">\
                                          </div>\
                                          <div class="input-row">\
                                            <label>Username</label>\
                                            <input type="text" placeholder="goRatchet">\
                                          </div>\
                                        </form>', null, section);
//Toggles section
 var section = pb.addSection('Toggles Section');
 pb.add('Default', '<div class="toggle">\
                          <div class="toggle-handle"></div>\
                        </div>', null, section);
 pb.add('Active', '<div class="toggle active">\
                          <div class="toggle-handle"></div>\
                        </div>', null, section);
//Popover section
 var section = pb.addSection('Popover Section');
 pb.add('Popover Header', '<header class="bar bar-nav">\
                            <a href="#myPopover">\
                              <h1 class="title">\
                                Tap title\
                                <span class="icon icon-caret"></span>\
                              </h1>\
                            </a>\
                          </header>', null, section);
 pb.add('Popover Menu', '<div id="myPopover" class="popover">\
                            <header class="bar bar-nav">\
                              <h1 class="title">Popover title</h1>\
                            </header>\
                            <ul class="table-view">\
                              <li class="table-view-cell">Item1</li>\
                              <li class="table-view-cell">Item2</li>\
                              <li class="table-view-cell">Item3</li>\
                              <li class="table-view-cell">Item4</li>\
                              <li class="table-view-cell">Item5</li>\
                              <li class="table-view-cell">Item6</li>\
                              <li class="table-view-cell">Item7</li>\
                              <li class="table-view-cell">Item8</li>\
                            </ul>\
                          </div>', null, section);
 pb.add('Modal Header', '<div id="myModalexample" class="modal">\
                            <header class="bar bar-nav">\
                              <a class="icon icon-close pull-right" href="#myModalexample"></a>\
                              <h1 class="title">Modal</h1>\
                            </header>\
                          </div>', null, section);
pb.add('Modal Content', '<div class="content">\
                              <p class="content-padded">The contents of my modal go here. Lorem ipsum dolor sit amet, \
                              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna \
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>\
                            </div>', null, section);
//Popover section
 var section = pb.addSection('Slider Section');
  pb.add('Slider', '<div class="slider" id="mySlider">\
                      <div class="slide-group">\
                        <div class="slide">\
                          <img src="http://placehold.it/640x300">\
                          <span class="slide-text">\
                            <span class="icon icon-left-nav"></span>\
                            Slide me\
                          </span>\
                        </div>\
                        <div class="slide">\
                          <img src="http://placehold.it/640x300">\
                        </div>\
                        <div class="slide">\
                          <img src="http://placehold.it/640x300">\
                        </div>\
                      </div>\
                    </div>', null, section);
     pinegrow.addFramework(f, 1);

     // pb.takePhotos('x_mk_pro_html_v1.0/photo-stage.html');
        var notRequiredFiles = ["index.css"];
        var templatesOrder = ["index.html"];

        //Register starting page template
        f.addTemplateProjectFromResourceFolder('template', null, 0, function (node) {
            var currentFilesName = notRequiredFiles.filter(function (fileName) {
                return node.name == fileName;
            });
            if (currentFilesName && currentFilesName.length > 0) {
                node.required = false;
            }

            var nodeIndex = templatesOrder.indexOf(node.name);
            if (nodeIndex >= 0) node.order = nodeIndex;
        });

    });


    //will move this to PG core later
    var PgPluginBuilder = function(f) {

        var count = 0;

        var getType = function(what) {
            what = what || 'comp';
            count++;
            return f.type + '.' + what + '.' + count;
        }

        this.addSection = function(name) {
            var section = new PgFrameworkLibSection(getType('section'), name);
            f.addLibSection(section);
            return section;
        }

        this.add = function(name, code, options, section) {
            var type = getType();

            var c = new PgComponentType(type, name);

            c.code = code;

            // c.preview_image = c.type + '.png';
            // c.button_image = c.preview_image;
            c.no_lib_label = true;

            //c.tags = 'block';

            if(options) {
                $.each(options, function(key, val) { c[key] = val; });
            }

            f.addComponentType(c);

            if(section) {
                section.addComponentType(c);
            }
            return c;
        }

        this.addSourceComponent = function(node, selector, name, options, section) {
            var els = node.find(selector);
            for(var i = 0; i < els.length; i++) {
                this.add(name + (els.length > 1 ? (' ' + (i+1)) : ''), els[i].toStringOriginal(true), options, section);
            }
        }

        this.addScriptToComponent = function(c, script) {
          
            if(c.addEventHandler) {
                c.addEventHandler('on_inserted', function($el, page) {
                    //replace ids
                    var id = $el.attr('id');
                    if(id) {
                        script = script.replace(/\$ELEMENT_ID/g, id);
                    }
                })
            }
            
          }
    }

});

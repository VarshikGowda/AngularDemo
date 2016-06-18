var app = angular.module('appAngularDemo', ['selectize']);

app.controller('demoController', function ($scope, $timeout,$filter) {

    var jsonData = [{ value: 1, gender: 'M', text: 'Phillip Reyes', email: 'preyes0@imdb.com', city: 'Austin' },
                { value: 2, gender: 'F', text: 'Debra Murray', email: 'dmurray1@ft.com', city: 'Sheksna' },
                { value: 3, gender: 'M', text: 'Keith Woods', email: 'kwoods2@soundcloud.com', city: 'Kharagauli' },
                { value: 4, gender: 'M', text: 'Jimmy Oliver', email: 'joliver3@unc.edu', city: 'Foxrock' },
                { value: 5, gender: 'F', text: 'Deborah Nichols', email: 'dnichols4@ox.ac.uk', city: 'Kāmyārān' },
                { value: 6, gender: 'F', text: 'Sara Lynch', email: 'slynch5@example.com', city: 'At Tall al Kabīr' },
                { value: 7, gender: 'F', text: 'Lisa Campbell', email: 'lcampbell6@list-manage.com', city: 'Guararapes' },
                { value: 8, gender: 'F', text: 'Deborah Allen', email: 'dallen7@bizjournals.com', city: 'Yixing' },
                { value: 9, gender: 'F', text: 'Bonnie Hamilton', email: 'bhamilton8@mtv.com', city: 'Sagopshi' },
                { value: 10, gender: 'M', text: 'Donald Richards', email: 'drichards9@upenn.edu', city: 'Baishuiyang' },
                { value: 11, gender: 'F', text: 'Paula Arnold', email: 'parnolda@seesaa.net', city: 'Salmi' },
                { value: 12, gender: 'F', text: 'Brenda Morales', email: 'bmoralesb@paypal.com', city: 'Kema' },
                { value: 13, gender: 'F', text: 'Julie Alexander', email: 'jalexanderc@europa.eu', city: 'Qarqania' },
                { value: 14, gender: 'M', text: 'Eric Thomas', email: 'ethomasd@canalblog.com', city: 'Skrunda' },
                { value: 15, gender: 'F', text: 'Elizabeth Smith', email: 'esmithe@nba.com', city: 'Bayeux' },
                { value: 16, gender: 'M', text: 'Eugene Watson', email: 'ewatsonf@prweb.com', city: 'Borok' },
                { value: 17, gender: 'F', text: 'Wanda Barnes', email: 'wbarnesg@joomla.org', city: 'Masis' },
                { value: 18, gender: 'M', text: 'Bruce Kelly', email: 'bkellyh@dmoz.org', city: 'Segovia' },
                { value: 19, gender: 'F', text: 'Annie Scott', email: 'ascotti@phpbb.com', city: 'Bystryanka' },
                { value: 20, gender: 'F', text: 'Ruby Fields', email: 'rfieldsj@hp.com', city: 'Calibungan' },
                { value: 21, gender: 'F', text: 'Diane Rivera', email: 'driverak@cbc.ca', city: 'Rencun' },
                { value: 22, gender: 'F', text: 'Linda Butler', email: 'lbutlerl@yelp.com', city: 'Douliu' },
                { value: 23, gender: 'F', text: 'Donna Olson', email: 'dolsonm@forbes.com', city: 'Lyon' },
                { value: 24, gender: 'F', text: 'Wanda Edwards', email: 'wedwardsn@bandcamp.com', city: 'Huaquirca' },
                { value: 25, gender: 'M', text: 'James Banks', email: 'jbankso@shop-pro.jp', city: 'Shuangfeng' },
                { value: 26, gender: 'M', text: 'Terry Perez', email: 'tperezp@yellowpages.com', city: 'Dajin' },
                { value: 27, gender: 'M', text: 'Harold Wallace', email: 'hwallaceq@posterous.com', city: 'Bánov' },
                { value: 28, gender: 'F', text: 'Lillian Cox', email: 'lcoxr@com.com', city: 'Villa Nueva' },
                { value: 29, gender: 'M', text: 'Craig Nguyen', email: 'cnguyens@nbcnews.com', city: 'Jatimulyo' },
                { value: 30, gender: 'F', text: 'Ashley Rodriguez', email: 'arodriguezt@tripadvisor.com', city: 'Nyaunglebin' },
                { value: 31, gender: 'M', text: 'Carl Elliott', email: 'celliottu@ocn.ne.jp', city: 'Shizikeng' },
                { value: 32, gender: 'M', text: 'Walter Mendoza', email: 'wmendozav@blogger.com', city: 'Krinichnaya' },
                { value: 33, gender: 'F', text: 'Nicole Palmer', email: 'npalmerw@geocities.com', city: 'Hujirt' },
                { value: 34, gender: 'M', text: 'Chris Gilbert', email: 'cgilbertx@addtoany.com', city: 'Tivat' },
                { value: 35, gender: 'M', text: 'Keith Fuller', email: 'kfullery@wordpress.com', city: 'Quillota' },
                { value: 36, gender: 'F', text: 'Rachel Adams', email: 'radamsz@quantcast.com', city: 'Lučko' },
                { value: 37, gender: 'F', text: 'Michelle Lane', email: 'mlane10@hatena.ne.jp', city: 'Thanatpin' },
                { value: 38, gender: 'F', text: 'Judy Scott', email: 'jscott11@thetimes.co.uk', city: 'Enrekang' },
                { value: 39, gender: 'M', text: 'Johnny Bennett', email: 'jbennett12@stumbleupon.com', city: 'Qianfoling' },
                { value: 40, gender: 'F', text: 'Karen Nguyen', email: 'knguyen13@craigslist.org', city: 'Valongo' },
                { value: 41, gender: 'M', text: 'Ronald Turner', email: 'rturner14@aboutads.info', city: 'Vitrolles' },
                { value: 42, gender: 'F', text: 'Ann Sanchez', email: 'asanchez15@cornell.edu', city: 'Paris 12' },
                { value: 43, gender: 'F', text: 'Catherine Austin', email: 'caustin16@github.io', city: 'Dartang' },
                { value: 44, gender: 'M', text: 'Douglas Patterson', email: 'dpatterson17@webs.com', city: 'Cikujang' },
                { value: 45, gender: 'M', text: 'William Arnold', email: 'warnold18@infoseek.co.jp', city: 'Sandefjord' },
                { value: 46, gender: 'F', text: 'Helen Stanley', email: 'hstanley19@columbia.edu', city: 'Kota Kinabalu' },
                { value: 47, gender: 'F', text: 'Gloria Thomas', email: 'gthomas1a@sogou.com', city: 'Staryy Cherek' },
                { value: 48, gender: 'M', text: 'Dennis Carr', email: 'dcarr1b@nhs.uk', city: 'Murakami' },
                { value: 49, gender: 'M', text: 'Gerald Green', email: 'ggreen1c@elpais.com', city: 'Khoronk’' },
                { value: 50, gender: 'F', text: 'Jacqueline Harris', email: 'jharris1d@w3.org', city: 'Lameiras' },
                { value: 51, gender: 'M', text: 'Robert Spencer', email: 'rspencer1e@sakura.ne.jp', city: 'Pasadena' },
                { value: 52, gender: 'M', text: 'Gregory Fowler', email: 'gfowler1f@ow.ly', city: 'Gorbunki' },
                { value: 53, gender: 'M', text: 'Shawn Stanley', email: 'sstanley1g@netscape.com', city: 'Češinovo' },
                { value: 54, gender: 'M', text: 'Steve Rodriguez', email: 'srodriguez1h@fotki.com', city: 'Xuetian' },
                { value: 55, gender: 'F', text: 'Frances Foster', email: 'ffoster1i@aboutads.info', city: 'Rehnān' },
                { value: 56, gender: 'M', text: 'Matthew Larson', email: 'mlarson1j@blinklist.com', city: 'Kuty' },
                { value: 57, gender: 'F', text: 'Wanda Wilson', email: 'wwilson1k@discuz.net', city: 'Pontalina' },
                { value: 58, gender: 'M', text: 'Anthony Robertson', email: 'arobertson1l@ft.com', city: 'Qukuhu' },
                { value: 59, gender: 'F', text: 'Barbara King', email: 'bking1m@upenn.edu', city: 'Uppsala' },
                { value: 60, gender: 'M', text: 'Craig Young', email: 'cyoung1n@tmall.com', city: 'Anambongan' },
                { value: 61, gender: 'F', text: 'Carolyn Moreno', email: 'cmoreno1o@reference.com', city: 'Lumil' },
                { value: 62, gender: 'F', text: 'Marilyn Simpson', email: 'msimpson1p@wix.com', city: 'Boto' },
                { value: 63, gender: 'M', text: 'Raymond Jones', email: 'rjones1q@springer.com', city: 'Suicheng' },
                { value: 64, gender: 'F', text: 'Cheryl Diaz', email: 'cdiaz1r@seattletimes.com', city: 'Negararatu' },
                { value: 65, gender: 'M', text: 'Bruce Duncan', email: 'bduncan1s@hugedomains.com', city: 'Cibenda' },
                { value: 66, gender: 'F', text: 'Susan Morgan', email: 'smorgan1t@whitehouse.gov', city: 'Siemiatycze' },
                { value: 67, gender: 'F', text: 'Judith Stephens', email: 'jstephens1u@cafepress.com', city: 'Sujiatuo' },
                { value: 68, gender: 'F', text: 'Ann Stone', email: 'astone1v@vkontakte.ru', city: 'Sodankylä' },
                { value: 69, gender: 'M', text: 'Randy Wilson', email: 'rwilson1w@rakuten.co.jp', city: 'Monteros' },
                { value: 70, gender: 'M', text: 'Jeffrey Watkins', email: 'jwatkins1x@mapquest.com', city: 'Itapecuru Mirim' },
                { value: 71, gender: 'M', text: 'Brian Campbell', email: 'bcampbell1y@gizmodo.com', city: 'Mamu' },
                { value: 72, gender: 'F', text: 'Lori Duncan', email: 'lduncan1z@oracle.com', city: 'Estância' },
                { value: 73, gender: 'F', text: 'Kathy Miller', email: 'kmiller20@tripod.com', city: 'Pasiragung' },
                { value: 74, gender: 'M', text: 'Bobby Bishop', email: 'bbishop21@samsung.com', city: 'Denov' },
                { value: 75, gender: 'M', text: 'Fred Watson', email: 'fwatson22@google.co.jp', city: 'Almaguer' },
                { value: 76, gender: 'F', text: 'Christina Shaw', email: 'cshaw23@washingtonpost.com', city: 'Yingchuan' },
                { value: 77, gender: 'M', text: 'Louis Peterson', email: 'lpeterson24@noaa.gov', city: 'Linggou' },
                { value: 78, gender: 'M', text: 'Chris Hall', email: 'chall25@ifeng.com', city: 'Norrköping' },
                { value: 79, gender: 'F', text: 'Kimberly Cunningham', email: 'kcunningham26@cdc.gov', city: 'Junik' },
                { value: 80, gender: 'F', text: 'Bonnie Stone', email: 'bstone27@loc.gov', city: 'Kudanding' },
                { value: 81, gender: 'F', text: 'Katherine Hansen', email: 'khansen28@stumbleupon.com', city: 'Timiryazevskoye' },
                { value: 82, gender: 'M', text: 'Nicholas Martin', email: 'nmartin29@usda.gov', city: 'Ulster Spring' },
                { value: 83, gender: 'F', text: 'Lois Garrett', email: 'lgarrett2a@stumbleupon.com', city: 'Linshanhe' },
                { value: 84, gender: 'M', text: 'Clarence Young', email: 'cyoung2b@reference.com', city: 'New Orleans' },
                { value: 85, gender: 'M', text: 'Willie Torres', email: 'wtorres2c@angelfire.com', city: 'Nyima' },
                { value: 86, gender: 'F', text: 'Jessica Washington', email: 'jwashington2d@alibaba.com', city: 'Mozhong' },
                { value: 87, gender: 'F', text: 'Rebecca Williams', email: 'rwilliams2e@mlb.com', city: 'Xiangyang' },
                { value: 88, gender: 'F', text: 'Ruby Moreno', email: 'rmoreno2f@homestead.com', city: 'Smiltene' },
                { value: 89, gender: 'M', text: 'Joshua Matthews', email: 'jmatthews2g@about.me', city: 'Arrën' },
                { value: 90, gender: 'M', text: 'Christopher Daniels', email: 'cdaniels2h@sourceforge.net', city: 'Farafenni' },
                { value: 91, gender: 'M', text: 'Terry Willis', email: 'twillis2i@zdnet.com', city: 'Izumi' },
                { value: 92, gender: 'F', text: 'Kelly Powell', email: 'kpowell2j@ca.gov', city: 'Mocoa' },
                { value: 93, gender: 'M', text: 'Jesse Cole', email: 'jcole2k@walmart.com', city: 'Zhanlong' },
                { value: 94, gender: 'M', text: 'Kevin Rogers', email: 'krogers2l@bbb.org', city: 'Banyuresmi' },
                { value: 95, gender: 'F', text: 'Amy Vasquez', email: 'avasquez2m@hubpages.com', city: 'Oliveirinha' },
                { value: 96, gender: 'F', text: 'Jean Carpenter', email: 'jcarpenter2n@hud.gov', city: 'Chang’an' },
                { value: 97, gender: 'M', text: 'Samuel Greene', email: 'sgreene2o@constantcontact.com', city: 'Shilong' },
                { value: 98, gender: 'F', text: 'Ruby Williams', email: 'rwilliams2p@blogspot.com', city: 'Yangpu' },
                { value: 99, gender: 'M', text: 'Stephen Adams', email: 'sadams2q@china.com.cn', city: 'Klang' },
                { value: 100, gender: 'M', text: 'Timothy Harrison', email: 'tharrison2r@drupal.org', city: 'Ovalle' }];

    
   
    $scope.myModel;

    $scope.myOptions = jsonData;

    $scope.myConfig = {
        create: true,
        onChange: function (value) {
            console.log('onChange', value)
        },
        // maxItems: 1,
        // required: true,
    }

    $scope.selectedList = [];

    if ($scope.myModel != undefined && $scope.myModel != 'undefined') {
        for (var i = 0; i < $scope.myModel.length; i++) {
            for (var q = 0; q < $scope.myOptions.length; q++) {
                if ($scope.myOptions[i] == $scope.myOptions[q].id) {
                    $scope.selectedList.push($scope.myOptions[q]);
                }
            }
        }
    }

    $scope.names;
   
    $scope.nameFilter = {
        persist: false,
        maxItems: null,
        valueField: 'value', //id
        labelField: 'text', //name
        options: jsonData,
        searchField: ['text'],  //searchField: ['name', 'email', 'city'],
        render: {
            item: function (item, escape) {
                //debugger;
                $scope.selectedList.push(item);
                return '<div>' +
                    (item.text ? '<span class="name">' + escape(item.text) + '</span>' : '')
                '</div>';
            },
            option: function (item, escape) {
                var label = item.text;
                //var caption = item.email ? item.city : null;
                return '<div>' +
                    '<span class="label">' + escape(label) + '</span> </div>';
                //return '<div>' +
                //    '<span class="label">' + escape(label) + '</span><br/>' +
                //    (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                //'</div>';
            }
        }
    }

});

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: "HTML/CSS",
				price: 100000,
				imagepath: "/images/Courses/Web-Development/htmlcss-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Sale",
                summary: "HTML/CSS course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 45,
                categoryId: 1,
                reviewCount: 33,
                overallReview: 4.67
            },
            {
                name: "JavaSript",
				price: 200000,
				imagepath: "/images/Courses/Web-Development/javascript-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Sale",
				summary: "JavaSript course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 14,
                categoryId: 1,
                reviewCount: 4,
                overallReview: 4.27
            },
            {
                name: "React",
				price: 250000,
				imagepath: "/images/Courses/Web-Development/React-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Hot",
				summary: "React course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 124,
                categoryId: 1,
                reviewCount: 12,
                overallReview: 3.67
            },
            {
                name: "Angular",
				price: 250000,
				imagepath: "/images/Courses/Web-Development/angular-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "New",
				summary: "Angular course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 53,
                categoryId: 1,
                reviewCount: 12,
                overallReview: 4.12
            },
            {
                name: "Python",
				price: 230000,
				imagepath: "/images/Courses/Programming-and-Computer-Science/python-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Hot",
				summary: "Python course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 121,
                categoryId: 2,
                reviewCount: 23,
                overallReview: 3.67
            },
            {
                name: "Command Line",
				price: 200000,
				imagepath: "/images/Courses/Programming-and-Computer-Science/cmd-line-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "New",
				summary: "Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 12,
                categoryId: 2,
                reviewCount: 7,
                overallReview: 2.67
            },
            {
                name: "PHP",
				price: 200000,
				imagepath: "/images/Courses/Programming-and-Computer-Science/php-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Sale",
				summary: "PHP course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 64,
                categoryId: 2,
                reviewCount: 23,
                overallReview: 3.97
            },
            {
                name: "C++",
				price: 180000,
				imagepath: "/images/Courses/Programming-and-Computer-Science/Cplusplus-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Available",
				summary: "C++ course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 135,
                categoryId: 2,
                reviewCount: 124,
                overallReview: 3.17
            },
            {
                name: "C Programming",
				price: 150000,
				imagepath: "/images/Courses/Programming-and-Computer-Science/C-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Available",
				summary: "C Programming course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 123,
                categoryId: 2,
                reviewCount: 52,
                overallReview: 4.01
            },
            {
                name: "SQL",
				price: 180000,
				imagepath: "/images/Courses/Data-Science/sql-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Available",
				summary: "SQL course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 93,
                categoryId: 3,
                reviewCount: 46,
                overallReview: 3.47
            },
            {
                name: "C#",
				price: 180000,
				imagepath: "/images/Courses/Data-Science/csharp-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Available",
				summary: "SQL course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 56,
                categoryId: 3,
                reviewCount: 35,
                overallReview: 2.67
            },
            {
                name: "Java",
				price: 180000,
				imagepath: "/images/Courses/Data-Science/java-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Sale",
				summary: "Java course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 32,
                categoryId: 3,
                reviewCount: 11,
                overallReview: 2.67
            },
            {
                name: "MySQL",
				price: 180000,
				imagepath: "/images/Courses/Data-Science/mysql-logo.png",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Sale",
				summary: "MySQL course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 41,
                categoryId: 3,
                reviewCount: 24,
                overallReview: 3.87
            },
            {
                name: "Machine Learning",
				price: 250000,
				imagepath: "/images/Courses/Data-Science/machine-learning-logo.jpg",
				videopath: "/videos/HTML-CSS.mp4",
                status: "Hot",
				summary: "Machine Learning course for everyone",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lacus et risus consectetur elementum. In felis ipsum, venenatis in mauris a, blandit bibendum tortor. Nullam eu faucibus quam. Sed bibendum est libero. Nam eu magna sit amet quam dictum semper vel rhoncus ante. Duis est sapien, molestie at diam id, pellentesque convallis enim. Proin dui neque, pulvinar non mollis id, venenatis at augue. Nulla rhoncus aliquet tempus. In hendrerit elit neque, non pharetra libero congue sed. Pellentesque dignissim elementum ipsum, vel pellentesque justo bibendum eu. Suspendisse potenti. Sed ut magna et massa eleifend hendrerit. Proin commodo, orci a pharetra posuere, dui mauris posuere odio, eu facilisis lectus augue sollicitudin sapien. Quisque suscipit tempor vehicula. Nam tempor ex magna, et ullamcorper arcu luctus sit amet. Donec sollicitudin dictum urna placerat posuere. Vestibulum id neque suscipit nunc ultrices convallis. Phasellus nisl mi, efficitur quis condimentum et, rhoncus ac sapien. Maecenas nec tortor in neque imperdiet condimentum eget lacinia mi. Phasellus suscipit viverra mauris, sit amet maximus velit ornare a. Sed nec lacus viverra, rutrum ante non, interdum purus. Curabitur hendrerit posuere luctus.",
				sold: 32,
                categoryId: 3,
                reviewCount: 21,
                overallReview: 4.21
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Products', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
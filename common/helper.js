let helper = {};

helper.createStarList = (stars) => {
    let string = `<ul class="list">
                <li><a>5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> ${stars[4]}</a></li>
                <li><a>4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star disabled"></i> ${stars[3]}</a></li>
                <li><a>3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i> ${stars[2]}</a></li>
                <li><a>2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i> ${stars[1]}</a></li>
                <li><a>1 Star <i class="fa fa-star"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i><i class="fa fa-star disabled"></i> ${stars[0]}</a></li>
            </ul>`;
    return string;
};

module.exports = helper;
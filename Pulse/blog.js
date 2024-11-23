const blogsData = [
    { id: 1, text:'Read More', pageLink: '/topdescriptions/desc1.html', textContent: 'Small Business', title: 'Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop', category: 'business', content: 'Arash Fayz of LA Tutors knew he needed to change his business model when the pandemic hit. Here’s how he scaled his tutoring business after an 80% drop in clients.', image: './assets/blog_assets/img-1.png' },
    { id: 2, text:'Read More',pageLink: '/topdescriptions/desc2.html', textContent: 'Entrepreneurship', title: 'Monetizing a Network: How Jodi Brandstetter Started Her Second Business', category: 'entrepreneurship', content: 'STEM talent consultant Jodi Brandstetter started her second business during the pandemic—a business book publishing network. Here’s how she made it work.', image: './assets/blog_assets/img-2.jpg' },
    { id: 3, text:'Read More',pageLink: '/topdescriptions/desc3.html', textContent: 'Small Business', title: '5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital', category: 'small-business', content: 'Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital. Here’s what he’s learned from niching down and streamlining his business.', image: './assets/blog_assets/img-3.png' },
    { id: 4, text:'Read More',pageLink: '/topdescriptions/desc4.html', textContent: 'Cash Flow Tips', title: '5 Cash Flow Tips and Business Insights for Self-Employed Millennials from Justin Green CFP', category: 'cash-flow-tips', content: 'Justin Green is a fiduciary financial planner for Millennials. Here’s how he built his business to fit the market’s needs, plus his cash flow tips for small business owners.', image: './assets/blog_assets/img-4.jpg' },
    { id: 5, text:'Read More',pageLink: '/topdescriptions/desc5.html', textContent: 'Side Hustle', title: 'Starting a Services Business: Tips from Writer Nicole Rollender of Strand Writing Services', category: 'side-hustle', content: 'Nicole Rollender started Strand Writing Services back in 2018, and, since then, her business has only grown. Now she’s learning to keep her business and her work ethic sustainable.', image: './assets/blog_assets/img-5.png' },
    { id: 6, text:'Read More',pageLink: '/topdescriptions/desc6.html', textContent: 'Side Hustle', title: 'Streamline Your Operations for Success: How Jonathan Saeidian Went From $2,000 to a 7-Figure Business', category: 'side-hustle', content: 'Jonathan Saeidian started Brenton Way with $2,000. Now his marketing agency is a 7-figure business. Here’s how he did it.', image: './assets/blog_assets/img-6.png' },
    { id: 7, text:'Read More',pageLink: '/topdescriptions/desc7.html', textContent: 'Side Hustle', title: 'Balancing Your Side-Hustle and Full-Time Gig: How Greg Marano Juggles Teaching and Freelancing', category: 'entrepreneurship', content: 'Greg Marano is an English teacher and a resume writer who’s passionate about both lines of work. Here is how he manages his side-hustle.', image: './assets/blog_assets/img-7.png' },
    { id: 8, text:'Read More',pageLink: '/topdescriptions/desc8.html', textContent: 'Small Business', title: 'Big Goals and Basic Cash Flow', category: 'small-business', content: 'How Isaac Mashman Built His Top-Rated PR Firm Isaac Mashman of Mashman Ventures rapidly grew his PR business during the pandemic by following his gut. Learn how going against the grain and developing a solid team made all the difference.', image: './assets/blog_assets/img-8.png' },
    { id: 9,  text:'Read More',pageLink: '/topdescriptions/desc9.html',textContent: 'Cash Flow Tips', title: 'How Ryan David of We Buy Houses Pennsylvania Launched and Grew his Business', category: 'cash-flow-tips', content: 'Cash flow can make or break a real estate business. Learn what one investor does to stay cash positive.', image: './assets/blog_assets/img-9.png' },
    { id: 10, text:'Read More',pageLink: '/topdescriptions/desc10.html', textContent: 'Side Hustle', title: 'How Sam Waldman of Goodz Grew his Ecommerce Consultancy Agency', category: 'side-hustle', content: 'How do you grow a business? Sam Waldman of Goodz tells us how he boosted his ecommerce agency in this interview.', image: './assets/blog_assets/img-10.png' },
    { id: 11, text:'Read More',pageLink: '/topdescriptions/desc1.html', textContent: 'Side Hustle', title: 'Startup Success: Fundraising and Cash Flow Advice from Very Good Security', category: 'side-hustle', content: 'Colin Gerber of Very Good Security (VGS) explains how proper cash flow management drives success for early-stage startups.', image: './assets/blog_assets/img-11.png' },
    { id: 12, text:'Read More',pageLink: '/topdescriptions/desc2.html', textContent: 'Side Hustle', title: '3 Cash Flow Tips for Fintech Startups: How to Support Your Finance Team and Foster Growth', category: 'entrepreneurship', content: 'Fintech startup cash flow management doesn’t need to be time-consuming. Here are three tips from Airbase founder Thejo Kote.', image: './assets/blog_assets/img-12.png' },
    { id: 13, text:'Read More',pageLink: '/topdescriptions/desc3.html', textContent: 'Entrepreneurship', title: 'Cash Flow for Independent Contractors: Don’t Price Yourself Out', category: 'entrepreneurship', content: 'Tile installation contractors in Oklahoma have a lot of expenses to balance. Here’s how one woman keeps her cash flow positive.', image: './assets/blog_assets/img-13.png' },
    { id: 14, text:'Read More',pageLink: '/topdescriptions/desc4.html', textContent: 'Side Hustle', title: '4 PPP Tips on Optimizing Your Second Draw Check', category: 'side-hustle', content: 'Are you slotted to receive a second PPP loan? Here’s how you can make the most of it.', image: './assets/blog_assets/img-14.png' },
    { id: 15, text:'Read More',pageLink: '/topdescriptions/desc5.html', textContent: 'Side Hustle', title: 'Why Monitoring Cash Flow is Like Working Out', category: 'side-hustle', content: 'Like working out, monitoring your cash flow keeps your business healthy and prepared for the future. Read on to learn more tips on monitoring your cash flow.', image: './assets/blog_assets/img-15.png' },
    { id: 16, text:'Read More',pageLink: '/topdescriptions/desc10.html', textContent: 'Side Hustle', title: 'How KOMPAÏ Robotics Solves Human Problems', category: 'side-hustle', content: 'CEO Vincent Dupourqué of KOMPAÏ Robotics built his dream after years of study, testing, and fundraising.', image: './assets/blog_assets/img-16.png' },
    { id: 17, text:'Read More',pageLink: '/topdescriptions/desc9.html', textContent: 'Side Hustle', title: 'How Agencies can Adopt Subscription Models for Predictable Cash Flow', category: 'side-hustle', content: 'Can creative agencies leverage a subscription business model? They can. Here’s why and how your agency can create predictable cash flow with subscriptions.', image: './assets/blog_assets/img-17.png' },
    { id: 18, text:'Read More',pageLink: '/topdescriptions/desc8.html', textContent: 'Side Hustle', title: '5 Ways to Use Cash Flow Projection to Scale Growth', category: 'side-hustle', content: 'Here are five examples of how business owners can use cash flow projection to grow.', image: './assets/blog_assets/img-18.png' },
    { id: 19, text:'Read More',pageLink: '/topdescriptions/desc7.html', textContent: 'Side Hustle', title: '4 Ways Small Businesses can Connect with Consumers During COVID-19 & Beyond', category: 'side-hustle', content: 'Despite the effects of COVID-19, small businesses are finding ways to connect with their customers. Here are 4 ways you can reinvent your business model.', image: './assets/blog_assets/img-19.png' },
    { id: 20, text:'Read More',pageLink: '/topdescriptions/desc6.html', textContent: 'Side Hustle', title: 'How to (Quickly!) add eCommerce to your Business Strategy', category: 'side-hustle', content: 'Small businesses need to pivot during this pandemic. For many, eCommerce may be the solution.', image: './assets/blog_assets/img-20.jpg' },
    { id: 21, text:'Read More',pageLink: '/topdescriptions/desc5.html', textContent: 'Side Hustle', title: '5 Practical Cash Flow Survival Tips for Your Business During Coronavirus', category: 'side-hustle', content: 'COVID-19 has made 2020 anything but easy for small businesses. Our 5 practical cash flow survival tips can help you take back control.', image: './assets/blog_assets/img-21.png' },
    { id: 22, text:'Read More',pageLink: '/topdescriptions/desc1.html', textContent: 'Side Hustle', title: '10 Ways to Sabotage Your Business', category: 'side-hustle', content: 'Are you making these easy-to-solve small business mistakes? Many small business owners make the same errors every year. You’re smarter than them.', image: './assets/blog_assets/img-22.png' },
    { id: 23, text:'Read More',pageLink: '/topdescriptions/desc2.html', textContent: 'Side Hustle', title: 'Never Use QuickBooks and Spreadsheets for Cash Flow', category: 'side-hustle', content: 'Profitable businesses fail every day because they run out of cash. You have to forecast cash flow. But you don’t have to use spreadsheets.', image: './assets/blog_assets/img-23.jpg' },
    { id: 24, text:'Read More',pageLink: '/topdescriptions/desc3.html', textContent: 'Cash Flow Tips', title: 'The 6 Things That Can Kill Your Agency Dead', category: 'cash-flow-tips', content: 'To survive in business, you need to use common sense and understand one thing: cash flow management.', image: './assets/blog_assets/img-24.png' },
    { id: 25, text:'Read More',pageLink: '/topdescriptions/desc4.html', textContent: 'Cash Flow Tips', title: 'Milestone One', category: 'cash-flow-tips', content: 'The tough love and practical advice you need to get an actual business off the ground.', image: './assets/blog_assets/img-25.jpg' },
    { id: 26, text:'Read More',pageLink: '/topdescriptions/desc5.html', textContent: 'Cash Flow Tips', title: '8 Invoicing Tips to Maximize Cash Flow for Your Small Business', category: 'cash-flow-tips', content: 'To keep your business in the black, it’s crucial to invoice your clients the right way. Here are eight tips that will make invoicing more efficient and less stressful for you and your clients.', image: './assets/blog_assets/img-10.png' },
    { id: 27, text:'Read More',pageLink: '/topdescriptions/desc6.html', textContent: 'Cash Flow Tips', title: 'Overcoming Seasonal Fluctuations in Your Small Business', category: 'cash-flow-tips', content: 'Use cash flow forecasting to stay on top of natural ebbs and flows.', image: './assets/blog_assets/img-26.png' },
    { id: 28, text:'Read More',pageLink: '/topdescriptions/desc7.html', textContent: 'Cash Flow Tips', title: 'New Year’s Resolution: Understand Your Cash Flow', category: 'cash-flow-tips', content: 'The beginning of a new year is always a time for fresh starts.', image: './assets/blog_assets/img-5.png' },
    { id: 29, text:'Read More',pageLink: '/topdescriptions/desc8.html', textContent: 'Side Hustle', title: '5 Ways To Spend Less and Make More', category: 'side-hustle', content: 'Want to make more money? Stop spending it. “A penny saved is a penny earned,” said every grandparent ever.', image: './assets/blog_assets/img-12.png' },
    { id: 30, text:'Read More',pageLink: '/topdescriptions/desc9.html', textContent: 'Side Hustle', title: 'Startups Need Cash Flow Projections', category: 'side-hustle', content: '​So you’re working on a startup? That’s great. Welcome to the enchanted world of cash flow projections.', image: './assets/blog_assets/img-14.png' },
    { id: 31, text:'Read More',pageLink: '/topdescriptions/desc10.html', textContent: 'Side Hustle', title: 'The Cost vs. Cash Flow Conundrum', category: 'side-hustle', content: 'Dallas runs his entire business on his MacBook. While cruising through a client project one morning at his favorite coffee shop, Dallas manages to spill water on his… business.', image: './assets/blog_assets/img-5.png' },
    { id: 32, text:'Read More',pageLink: '/topdescriptions/desc5.html', textContent: 'Side Hustle', title: '7 Questions for Better Cash Flow', category: 'side-hustle', content: 'How closely do you monitor your business cash flow? Often or never or only on special occasions like panic attacks?', image: './assets/blog_assets/img-6.png' },
    { id: 33, text:'Read More',pageLink: '/topdescriptions/desc2.html', textContent: 'Small Business', title: 'What is Cash Flow Projection?', category: 'small-business', content: 'We’re revisiting some of the basics for an obvious reason: we stop practicing them.', image: './assets/blog_assets/img-8.png' },
    { id: 34, text:'Read More',pageLink: '/topdescriptions/desc4.html', textContent: 'Small Business', title: 'Using Pulse To Track Actuals Alongside Projections', category: 'small-business', content: 'One of the most common questions from our customers and prospects is whether Pulse can be used to track actual income and expenses alongside projected income and expenses. The answer is yes!', image: './assets/blog_assets/img-9.png' },
    { id: 35, text:'Read More',pageLink: '/topdescriptions/desc6.html', textContent: 'Small Business', title: 'Three Quick Tips for Growing Your Online Business', category: 'small-business', content: 'Since Simple Focus has taken over Pulse, weve grown over 50% in customer base and almost doubled in revenue. Here what we did to make that happen.', image: './assets/blog_assets/img-20.jpg' },
    { id: 36, text:'Read More',pageLink: '/topdescriptions/desc7.html', textContent: 'Small Business', title: 'The Five Most Important Budget Line Items for Creative Agencies', category: 'small-business', content: 'Financial ratios matter for your business. Here are the ones that matter the most for creative agencies.', image: './assets/blog_assets/img-22.png' },
    { id: 37, text:'Read More',pageLink: '/topdescriptions/desc9.html', textContent: 'Small Business', title: 'Using Cash Flow Scenarios for Decisions in Pulse', category: 'small-business', content: 'Planning for the future is necessary to grow your business–itll also give you peace of mind. Here are some tips for predicting future cash flow so you can make decisions with confidence.', image: './assets/blog_assets/img-1.png' },
    { id: 38, text:'Read More',pageLink: '/topdescriptions/desc10.html', textContent: 'Small Business', title: 'Cash Flow: The Lifeblood of Your Business', category: 'small-business', content: 'Cash flow is the life blood of your business. Understanding cash flow is the key to keeping your business alive.', image: './assets/blog_assets/img-8.png' },
    { id: 39, text:'Read More',pageLink: '/topdescriptions/desc2.html', textContent: 'Small Business', title: 'Four Tips for ​Managing Your Startups Burn Rate', category: 'small-business', content: 'Managing your burn rate is critical for startups. This article will give you some tools for managing your burn rate and integrating cash flow management into growing your business.', image: './assets/blog_assets/img-9.png' },
    { id: 40, text:'Read More',pageLink: '/topdescriptions/desc6.html', textContent: 'Small Business', title: 'Four Cash Flow Bedtime Stories to Help You Sleep Better at Night', category: 'small-business', content: 'Cash flow problems keep many business owners up at night. Thats why we wrote these little bedtime stories to help you rest easy.', image: './assets/blog_assets/img-16.png' },
    { id: 41, text:'Read More',pageLink: '/topdescriptions/desc8.html', textContent: 'Small Business', title: 'Color Coding Projected Income and Expenses', category: 'small-business', content: 'By using financial accounts creatively, you can make Pulse even more powerful for cash flow projections.', image: './assets/blog_assets/img-19.png' },
    { id: 42, text:'Read More',pageLink: '/topdescriptions/desc9.html', textContent: 'Small Business', title: 'Why Your Startup Needs Pulse for Cash Management', category: 'small-business', content: 'You need Pulse for cash management and forecasting your cash decisions. Pulse helps you see what could happen in the future and the impacts that can happen from different scenarios.', image: './assets/blog_assets/img-17.png' },
];

let currentPage = 1;
const blogsPerPage = 6;
let filteredBlogs = blogsData;

const blogContainer = document.getElementById('blogContainer');
const pageNum = document.getElementById('pageNum');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderBlogs() {
    blogContainer.innerHTML = '';
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const blogsToDisplay = filteredBlogs.slice(start, end);

    blogsToDisplay.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h6>${blog.textContent}</h6>
            <h4>${blog.title}</h4>
            <p>${blog.content}</p>
            <a href="${blog.pageLink}">${blog.text}</a>
        `;
        blogContainer.appendChild(blogItem);
    });

    pageNum.textContent = currentPage;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= filteredBlogs.length;
}

function filterByCategory(category) {
    currentPage = 1;
    if (category === 'all') {
        filteredBlogs = blogsData;
    } else {
        filteredBlogs = blogsData.filter(blog => blog.category === category);
    }
    renderBlogs();
}

document.getElementById('categoryList').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const category = e.target.getAttribute('data-category');
        filterByCategory(category);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderBlogs();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage * blogsPerPage < filteredBlogs.length) {
        currentPage++;
        renderBlogs();
    }
});


renderBlogs();



const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});







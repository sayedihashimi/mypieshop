import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <span className="inline-block text-5xl mb-4">🥧</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-xl text-primary-600 font-medium">
          Baking traditions, one pie at a time since 1987
        </p>
      </div>

      {/* Origin Story */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </span>
          How It All Began
        </h2>
        <div className="prose prose-lg text-gray-600 space-y-4 pl-0 md:pl-13">
          <p className="text-lg leading-relaxed">
            It started with a simple lemon meringue pie and a grandmother's dream. In 1987, 
            Margaret "Maggie" Thornton opened Southside Pie Shop in a tiny storefront on the 
            south end of Shartlesville, Pennsylvania—hence the name. With nothing but her 
            mother's handwritten recipe cards, a secondhand oven, and an unwavering belief 
            that good pie could bring people together, she set out to share her love of baking 
            with the community.
          </p>
          <p className="text-lg leading-relaxed">
            Word spread quickly through Berks County. Farmers stopped by after market days. 
            Families ordered pies for Sunday dinners. Soon, the little shop couldn't keep up 
            with demand, and what started as a one-woman operation grew into a beloved local 
            institution.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 md:p-10 border border-primary-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Southside Pie Shop, we believe every pie tells a story. Our mission is to preserve 
          the art of traditional pie-making while creating new memories for the next generation. 
          Every crust is rolled by hand. Every filling is made from scratch. Every pie leaves our 
          kitchen with the same care Maggie put into her very first lemon meringue nearly four 
          decades ago.
        </p>
      </section>

      {/* Location Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          Our Home in Shartlesville
        </h2>
        <div className="prose prose-lg text-gray-600 space-y-4 pl-0 md:pl-13">
          <p className="text-lg leading-relaxed">
            Nestled in the heart of Pennsylvania Dutch Country, Shartlesville has been our home 
            for over 35 years. This tight-knit community of farmers, craftspeople, and families 
            has shaped everything we do. We source our apples from Ziegler's Orchard just up the 
            road, our eggs from the Miller family farm, and our butter from the local dairy co-op.
          </p>
          <p className="text-lg leading-relaxed">
            There's something special about baking in a place where neighbors still wave from 
            their porches and everyone knows your name. That small-town spirit is baked into 
            every pie we make.
          </p>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </span>
          Our Craft
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🥧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Made From Scratch</h3>
            <p className="text-gray-600 leading-relaxed">
              No shortcuts, no pre-made fillings, no frozen dough. Every pie starts with simple, 
              quality ingredients and time-honored techniques passed down through three generations.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌾</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Local Ingredients</h3>
            <p className="text-gray-600 leading-relaxed">
              We partner with Pennsylvania farmers and producers to source the freshest seasonal 
              ingredients. When you taste our pies, you're tasting the best of Berks County.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👩‍🍳</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Pie Classes</h3>
            <p className="text-gray-600 leading-relaxed">
              Want to learn the secrets of the perfect flaky crust? Join us for hands-on pie 
              classes where you'll master techniques that have taken us decades to perfect.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">❤️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Baked With Love</h3>
            <p className="text-gray-600 leading-relaxed">
              Every pie that leaves our shop carries a piece of our heart. We bake for birthdays, 
              holidays, family dinners, and quiet Tuesday evenings—because every day deserves pie.
            </p>
          </div>
        </div>
      </section>

      {/* Family Legacy */}
      <section className="mb-16 bg-warm-100 rounded-2xl p-8 md:p-10 border border-warm-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          A Family Legacy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Today, Southside Pie Shop is run by Maggie's granddaughter, Emma Thornton-Reyes, who 
          grew up rolling pie dough on the same flour-dusted counter where it all began. While 
          Maggie has since retired to her garden and her cats, her spirit lives on in every 
          recipe we bake.
        </p>
        <blockquote className="border-l-4 border-primary-400 pl-6 italic text-lg text-gray-600">
          "Grandma always said that a good pie is just love you can taste. We're 
          not just selling desserts—we're sharing our family with yours."
          <footer className="mt-2 text-sm text-gray-500 not-italic font-medium">— Emma Thornton-Reyes</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Taste the Tradition?</h2>
        <p className="text-primary-100 mb-8 max-w-lg mx-auto">
          Browse our selection of handcrafted pies and bring a little Shartlesville magic to your table.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Shop Our Pies
        </Link>
      </section>
    </div>
  );
}

export default About;

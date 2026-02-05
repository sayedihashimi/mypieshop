function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
        <p className="text-xl text-teal-600 font-medium">
          Baking traditions, one pie at a time since 1987
        </p>
      </div>

      {/* Origin Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It All Began</h2>
        <div className="prose prose-lg text-gray-600 space-y-4">
          <p>
            It started with a simple lemon meringue pie and a grandmother's dream. In 1987, 
            Margaret "Maggie" Thornton opened Southside Pie Shop in a tiny storefront on the 
            south end of Shartlesville, Pennsylvania—hence the name. With nothing but her 
            mother's handwritten recipe cards, a secondhand oven, and an unwavering belief 
            that good pie could bring people together, she set out to share her love of baking 
            with the community.
          </p>
          <p>
            Word spread quickly through Berks County. Farmers stopped by after market days. 
            Families ordered pies for Sunday dinners. Soon, the little shop couldn't keep up 
            with demand, and what started as a one-woman operation grew into a beloved local 
            institution.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-12 bg-teal-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Southside Pie Shop, we believe every pie tells a story. Our mission is to preserve 
          the art of traditional pie-making while creating new memories for the next generation. 
          Every crust is rolled by hand. Every filling is made from scratch. Every pie leaves our 
          kitchen with the same care Maggie put into her very first lemon meringue nearly four 
          decades ago.
        </p>
      </section>

      {/* Location Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Home in Shartlesville</h2>
        <div className="prose prose-lg text-gray-600 space-y-4">
          <p>
            Nestled in the heart of Pennsylvania Dutch Country, Shartlesville has been our home 
            for over 35 years. This tight-knit community of farmers, craftspeople, and families 
            has shaped everything we do. We source our apples from Ziegler's Orchard just up the 
            road, our eggs from the Miller family farm, and our butter from the local dairy co-op.
          </p>
          <p>
            There's something special about baking in a place where neighbors still wave from 
            their porches and everyone knows your name. That small-town spirit is baked into 
            every pie we make.
          </p>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Craft</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🥧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Made From Scratch</h3>
            <p className="text-gray-600">
              No shortcuts, no pre-made fillings, no frozen dough. Every pie starts with simple, 
              quality ingredients and time-honored techniques passed down through three generations.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🌾</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Ingredients</h3>
            <p className="text-gray-600">
              We partner with Pennsylvania farmers and producers to source the freshest seasonal 
              ingredients. When you taste our pies, you're tasting the best of Berks County.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">👩‍🍳</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pie Classes</h3>
            <p className="text-gray-600">
              Want to learn the secrets of the perfect flaky crust? Join us for hands-on pie 
              classes where you'll master techniques that have taken us decades to perfect.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Baked With Love</h3>
            <p className="text-gray-600">
              Every pie that leaves our shop carries a piece of our heart. We bake for birthdays, 
              holidays, family dinners, and quiet Tuesday evenings—because every day deserves pie.
            </p>
          </div>
        </div>
      </section>

      {/* Family Legacy */}
      <section className="mb-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">A Family Legacy</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Today, Southside Pie Shop is run by Maggie's granddaughter, Emma Thornton-Reyes, who 
          grew up rolling pie dough on the same flour-dusted counter where it all began. While 
          Maggie has since retired to her garden and her cats, her spirit lives on in every 
          recipe we bake.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          "Grandma always said that a good pie is just love you can taste," Emma says. "We're 
          not just selling desserts—we're sharing our family with yours."
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Taste the Tradition?</h2>
        <p className="text-gray-600 mb-6">
          Browse our selection of handcrafted pies and bring a little Shartlesville magic to your table.
        </p>
        <a 
          href="/" 
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Shop Our Pies
        </a>
      </section>
    </div>
  );
}

export default About;

import React from 'react'


export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title">
          <p>Frequently Asked Questions</p>
        </div>

        <ul className="faq-list">

          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What should I do to get started with digital marketing?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                To get started with digital marketing you should be eager to learn and you need to have a passion to excel at what you do, you can get started by learning the basics of HTML, getting a free domain from WordPress or Wix and then experimenting your ideas in those sites and then moving to build social media presence for them or you can always take the support of internet marketing agency/agencies.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">What is content marketing?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Content marketing is a strategic digital marketing approach where digital marketers create relevant, useful, reliable, consistent content and find suitable means of distributing over the digital marketing platforms
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">How often do we need to update and create content?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Creating and distributing content should be done however the frequency of creating content may differ depending on industry to industry and from one platform to another, you may want to keep updating your social media channels everyday with new offers but you would only publish one blog per week.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Do I need a blog to be successful in digital marketing?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Every industry has a set of questions that its targeted users are looking up for and if you can answer those questions in a very relevant and useful way you will win their trust which may lead to them trusting you enough to make a purchase from your site, so yes you would want a blog or may be blogged, but it is just not one thing that is going to make you successful in digital marketing.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">What is Data Mining?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Data mining or data cleaning is the process of detecting and correcting corrupt or inaccurate records from a record set, table, or database and refers to identifying incomplete, incorrect, inaccurate or irrelevant parts of the data and then replacing, modifying, or deleting the dirty or coarse data.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">What is local SEO in digital marketing?<i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Optimising your digital presence in social media or search engines in order to attract more of local business is called local SEO, so your strategies, campaigns and targeting would be more focused on a specific locality rather than the whole state or the country.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

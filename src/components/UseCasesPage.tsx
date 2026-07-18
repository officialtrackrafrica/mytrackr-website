import { Shop, Book, Brush } from 'iconsax-react';

// --- DATA STRUCTURES ---

const USE_CASES = [
  {
    id: 'vendor',
    icon: <Shop size="32" variant="Bulk" color='#135ED6' />,
    title: 'Online/Offline Vendor',
    audience: 'For business owners who sell — in shops, in markets, on Instagram, on WhatsApp.',
    persona: 'Chidinma runs a thriving fashion retail business from her shop in Balogun Market and her Instagram page. Money comes in from every direction — cash from walk-in customers, transfers for online orders, POS payments. Money goes out just as fast — new stock, delivery riders, shop rent, her sales girl\'s salary. Business is moving, but at the end of the month she genuinely cannot say how much she made.',
    problem: 'Sales are not profit. Chidinma sees money entering her account and assumes business is good — but she has never separated what she earns from what it costs her to buy stock, package it, and deliver it. She prices her goods by "market feeling," not by numbers. If a month goes badly, she doesn\'t know why.',
    solutions: [
      'Her bank transactions import automatically, and cash sales can be logged easily.',
      'Every naira spent on stock is tracked as a Direct Cost — so she sees her true profit after deducting what the goods actually cost her, not just her sales figure.',
      'Her Profit & Loss report shows her which months are genuinely good, not just busy.',
      'The stock value on her Balance Sheet reminds her that unsold inventory is money sitting on shelves.',
      'The tax estimator tells her what to set aside monthly, so tax season never ambushes her.'
    ],
    result: 'Chidinma now knows her real profit. She raised her prices on two items she discovered she was practically selling at a loss — and her profit went up without selling a single extra product.'
  },
  {
    id: 'schools',
    icon: <Book size="32" variant="Bulk" color="#135ED6" />,
    title: 'Schools',
    audience: 'For proprietors running nursery, primary, and secondary schools.',
    persona: 'Mrs. Adebayo owns a private school in Ibadan with 240 students. School fees arrive in waves — some parents pay full at the start of term, others in installments, others very late. Meanwhile salaries must be paid every single month, the generator needs diesel, and the school bus needs maintenance. She runs everything from her personal knowledge and a fee register book.',
    problem: 'School income is seasonal but school expenses are constant. Mrs. Adebayo collects most of her revenue in three buckets a year — but by the middle of each term, cash gets tight and she cannot tell whether she is genuinely short or just badly timed. She has no clear picture of whether the school actually makes money after all its costs.',
    solutions: [
      'All fee payments landing in the school account are captured and categorised as income automatically.',
      'Salaries, diesel, maintenance, and supplies are tracked as expenses — giving a true monthly picture.',
      'The Cash Flow report shows her burn rate — how much the school spends monthly — so she knows exactly how long fee income needs to last.',
      'The runway insight warns her early when cash won\'t stretch to the end of term, while there\'s still time to act.',
      'Outstanding loans (like the bus loan) sit on her Balance Sheet so she always knows the school\'s true financial position.'
    ],
    result: 'Mrs. Adebayo now plans each term with real numbers. She knows her monthly running cost, saves a portion of first-week fee collections against mid-term shortfalls, and finally knows what the school truly earns her each session.'
  },
  {
    id: 'creatives',
    icon: <Brush size="32" variant="Bulk" color='#135ED6' />,
    title: 'Creatives',
    audience: 'For designers, photographers, makeup artists, content creators, musicians, and everyone monetising their talent.',
    persona: 'Tolu is a freelance photographer and content creator in Lagos. His income is unpredictable and comes from everywhere — a wedding shoot this weekend, a brand campaign next month, a content retainer that pays quarterly. His expenses are just as scattered — equipment, editing software subscriptions, transport to shoots, an assistant he pays per job.',
    problem: 'Feast-and-famine finances. In a good month Tolu feels rich; two months later he is stretching. Because income is irregular, he has never been able to answer basic questions: What do I actually earn per year? Which type of work pays me best after costs? How much should I keep aside for tax as things get more serious?',
    solutions: [
      'Every payment from every client lands in one clear picture — retainers, one-off gigs, and brand deals all categorised as income.',
      'Job-specific costs like his assistant\'s fee are tracked as Direct Costs — so he sees if his gigs are actually profitable after expenses.',
      'Subscriptions, data, and equipment costs stop disappearing invisibly — they show up as the real business expenses they are.',
      'His burn rate tells him exactly how much a "quiet month" costs him — so he knows how much emergency savings to build in the good months.',
      'The tax estimator gives him a monthly set-aside figure, preparing him for formalisation as his brand grows.'
    ],
    result: 'Tolu built a two-month emergency fund, and now takes on work strategically instead of out of panic.'
  },
  {
    id: 'founders',
    icon: <Book size="32" variant="Bulk" color='#135ED6' />,
    title: 'Founders',
    audience: 'For early-stage founders building startups and growing companies.',
    persona: 'Emeka and Hauwa co-founded a logistics startup in Lagos eighteen months ago. The company has some revenue, a small team of five, and money from a friends-and-family round. They are deep in product and operations — finance is the thing they promise themselves they\'ll "get serious about" every month. Investors are starting to ask questions they can\'t answer quickly: What\'s your burn? What\'s your runway? What\'s your margin?',
    problem: 'Founders live or die by their numbers but rarely have them. Emeka and Hauwa cannot afford a finance hire yet, and spreadsheets go stale the moment they build them. When a potential investor asked for their monthly burn rate, it took them four days to piece together an answer — and it didn\'t inspire confidence.',
    solutions: [
      'Company bank accounts sync automatically — no more stale spreadsheets.',
      'Their burn rate and runway are calculated live and sit on their dashboard — the two numbers every investor asks first, always ready.',
      'The P&L separates direct service costs from overheads, showing their true gross margin as the business scales.',
      'Capital injections are logged separately from revenue, so their books don\'t flatter them — they see real earned income versus money raised.',
      'When due diligence eventually comes, their financial records are organised, categorised, and exportable from day one.'
    ],
    result: 'Emeka and Hauwa answer investor questions in seconds, not days. They caught a creeping logistics cost early because their margin dipped on the dashboard, renegotiated with their fleet partner, and extended their runway by two months without raising a kobo.'
  }
];



// --- COMPONENTS ---

export const UseCasesPage = () => {


  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight sm:text-5xl">
          Built for businesses like yours
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Whether you sell physical goods, run a school, create content, or build a startup, see how MyTrackr brings clarity to your finances.
        </p>
      </div>

      {/* Use Cases Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {USE_CASES.map((useCase) => (
          <div key={useCase.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                {useCase.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{useCase.title}</h2>
                <p className="text-sm font-medium text-brand-blue mt-1">{useCase.audience}</p>
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">Meet the User</h3>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {useCase.persona}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">The Problem</h3>
                <p className="text-slate-600 leading-relaxed">
                  {useCase.problem}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3">How MyTrackr Helps</h3>
                <ul className="space-y-3">
                  {useCase.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                      <span className="leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">The Result</h3>
                <p className="text-slate-800 font-medium leading-relaxed bg-blue-50/50 p-4 rounded-xl">
                  {useCase.result}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};
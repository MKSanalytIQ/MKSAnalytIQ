import type { ServiceId } from "@/lib/content";

const serviceLabel: Record<ServiceId, string> = {
  marketing: "DIGITAL MARKETING",
  web: "WEB DEVELOPMENT",
  software: "SOFTWARE SYSTEMS",
  app: "MOBILE APPLICATIONS",
  ai: "AI & AUTOMATION",
  social: "SOCIAL MEDIA",
  events: "EVENT MANAGEMENT",
};

export function ServiceArtwork({ serviceId, title }: { serviceId: ServiceId; title: string }) {
  const id = `service-${serviceId}`;
  return (
    <div
      className={`service-artwork service-artwork--${serviceId}`}
      role="img"
      aria-label={`${title} visual illustration`}
    >
      <svg viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f8fbff" />
            <stop offset="0.58" stopColor="#f0f5fd" />
            <stop offset="1" stopColor="#fff4eb" />
          </linearGradient>
          <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3678ef" />
            <stop offset="1" stopColor="#79aaff" />
          </linearGradient>
          <linearGradient id={`${id}-warm`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb46e" />
            <stop offset="1" stopColor="#f26739" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="20"
              floodColor="#314969"
              floodOpacity="0.12"
            />
          </filter>
        </defs>
        <rect width="1000" height="640" fill={`url(#${id}-bg)`} />
        <circle cx="90" cy="560" r="210" fill="#dceaff" opacity="0.62" />
        <circle cx="960" cy="38" r="245" fill="#ffe5d0" opacity="0.57" />
        <path d="M0 520C210 455 313 651 543 584s319-128 457-76v132H0z" fill="#fff" opacity="0.5" />
        <text
          x="66"
          y="76"
          fill="#78859b"
          fontSize="14"
          fontWeight="700"
          letterSpacing="3"
          fontFamily="Inter,Arial,sans-serif"
        >
          {serviceLabel[serviceId]}
        </text>
        {serviceId === "marketing" ? <MarketingArt id={id} /> : null}
        {serviceId === "web" ? <WebArt id={id} /> : null}
        {serviceId === "software" ? <SoftwareArt id={id} /> : null}
        {serviceId === "app" ? <AppArt id={id} /> : null}
        {serviceId === "ai" ? <AiArt id={id} /> : null}
        {serviceId === "social" ? <SocialArt id={id} /> : null}
        {serviceId === "events" ? <EventsArt id={id} /> : null}
      </svg>
      <span className="service-artwork__caption" aria-hidden="true">
        MKSANALYTIQ <i />
      </span>
    </div>
  );
}

function MarketingArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="150" y="112" width="700" height="432" rx="28" fill="#fff" />
      <path d="M178 112h644a28 28 0 0 1 28 28v45H150v-45a28 28 0 0 1 28-28" fill="#fbfcfe" />
      <circle cx="183" cy="147" r="6" fill="#ff9270" />
      <circle cx="205" cy="147" r="6" fill="#f4c36a" />
      <circle cx="227" cy="147" r="6" fill="#77c8a0" />
      <text
        x="265"
        y="153"
        fill="#34435b"
        fontSize="16"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Campaign workspace
      </text>
      <rect x="185" y="210" width="275" height="288" rx="18" fill="#f6f8fc" />
      <text
        x="211"
        y="249"
        fill="#8793a7"
        fontSize="12"
        fontWeight="700"
        letterSpacing="1.6"
        fontFamily="Inter,Arial,sans-serif"
      >
        CHANNEL PLANNING
      </text>
      <text
        x="211"
        y="286"
        fill="#192844"
        fontSize="24"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        A clearer way
      </text>
      <text
        x="211"
        y="316"
        fill="#192844"
        fontSize="24"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        to grow.
      </text>
      <rect x="211" y="346" width="150" height="36" rx="18" fill={`url(#${id}-accent)`} />
      <text
        x="232"
        y="369"
        fill="#fff"
        fontSize="12"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        View campaign plan
      </text>
      <rect x="211" y="410" width="204" height="1" fill="#e0e6ef" />
      <rect x="211" y="430" width="86" height="9" rx="4.5" fill="#dce5f1" />
      <rect x="211" y="450" width="139" height="9" rx="4.5" fill="#e6ebf3" />
      <rect x="487" y="210" width="333" height="288" rx="18" fill="#fff" stroke="#e8edf5" />
      <text
        x="514"
        y="249"
        fill="#34435b"
        fontSize="16"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Reporting overview
      </text>
      <text x="514" y="274" fill="#98a3b3" fontSize="11" fontFamily="Inter,Arial,sans-serif">
        A practical view of the work in motion
      </text>
      <path
        d="M525 432 568 394l41 17 45-65 41 30 43-76"
        fill="none"
        stroke={`url(#${id}-accent)`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M525 432 568 394l41 17 45-65 41 30 43-76v130H525z"
        fill={`url(#${id}-accent)`}
        opacity="0.1"
      />
      <path d="M520 447h265M520 395h265M520 343h265" stroke="#edf1f6" strokeWidth="1" />
      <circle cx="738" cy="300" r="9" fill="#fff" stroke="#f26739" strokeWidth="4" />
      <rect x="514" y="463" width="108" height="20" rx="10" fill="#fff1e7" />
      <text
        x="529"
        y="477"
        fill="#cb542b"
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        PLAN · MEASURE · LEARN
      </text>
    </g>
  );
}

function WebArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="134" y="114" width="728" height="430" rx="25" fill="#fff" />
      <path d="M159 114h678a25 25 0 0 1 25 25v36H134v-36a25 25 0 0 1 25-25" fill="#f9fbfe" />
      <circle cx="170" cy="144" r="6" fill="#ff9270" />
      <circle cx="191" cy="144" r="6" fill="#f4c36a" />
      <circle cx="212" cy="144" r="6" fill="#77c8a0" />
      <rect x="291" y="133" width="344" height="21" rx="10.5" fill="#edf1f7" />
      <rect x="173" y="202" width="450" height="300" rx="16" fill="#f5f8fd" />
      <rect x="173" y="202" width="450" height="38" rx="16" fill="#fff" />
      <rect x="195" y="217" width="82" height="8" rx="4" fill="#172b4d" />
      <rect x="445" y="217" width="39" height="7" rx="3" fill="#c6d0df" />
      <rect x="497" y="217" width="40" height="7" rx="3" fill="#c6d0df" />
      <rect x="554" y="211" width="49" height="20" rx="10" fill={`url(#${id}-accent)`} />
      <text
        x="201"
        y="294"
        fill="#172b4d"
        fontSize="28"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        A website that works
      </text>
      <text
        x="201"
        y="328"
        fill="#172b4d"
        fontSize="28"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        as hard as you do.
      </text>
      <rect x="201" y="348" width="284" height="9" rx="4.5" fill="#cdd7e6" />
      <rect x="201" y="369" width="243" height="9" rx="4.5" fill="#dfe5ee" />
      <rect x="201" y="407" width="112" height="34" rx="17" fill={`url(#${id}-warm)`} />
      <rect x="460" y="385" width="134" height="92" rx="13" fill="#e0ebfb" />
      <path d="m471 457 34-39 22 22 20-16 34 53H471z" fill="#81a9e1" />
      <circle cx="560" cy="408" r="8" fill="#ffb46e" />
      <rect x="655" y="211" width="172" height="287" rx="18" fill="#132743" />
      <text
        x="678"
        y="251"
        fill="#a7c7ff"
        fontSize="12"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        COMPONENTS
      </text>
      <text x="679" y="291" fill="#ffd0a9" fontSize="17" fontWeight="700" fontFamily="monospace">
        &lt;Hero /&gt;
      </text>
      <rect x="679" y="313" width="102" height="7" rx="3.5" fill="#7fa3dc" opacity="0.85" />
      <rect x="679" y="335" width="121" height="7" rx="3.5" fill="#627fa8" />
      <rect x="679" y="357" width="89" height="7" rx="3.5" fill="#f19a68" />
      <rect x="679" y="394" width="120" height="1" fill="#ffffff" opacity="0.16" />
      <rect x="679" y="416" width="98" height="7" rx="3.5" fill="#7fa3dc" opacity="0.85" />
      <rect x="679" y="438" width="81" height="7" rx="3.5" fill="#627fa8" />
    </g>
  );
}

function SoftwareArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="123" y="105" width="754" height="443" rx="26" fill="#fff" />
      <path d="M149 105h140v443H149a26 26 0 0 1-26-26V131a26 26 0 0 1 26-26" fill="#152641" />
      <rect x="151" y="134" width="24" height="24" rx="8" fill={`url(#${id}-accent)`} />
      <text
        x="188"
        y="151"
        fill="#fff"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Workspace
      </text>
      <rect x="151" y="190" width="116" height="34" rx="10" fill="#fff" opacity="0.12" />
      <circle cx="169" cy="207" r="5" fill="#9fc4ff" />
      <rect x="183" y="203" width="66" height="8" rx="4" fill="#fff" opacity="0.8" />
      <circle cx="169" cy="253" r="5" fill="#8092ad" />
      <rect x="183" y="249" width="57" height="8" rx="4" fill="#c4cedc" opacity="0.62" />
      <circle cx="169" cy="293" r="5" fill="#8092ad" />
      <rect x="183" y="289" width="67" height="8" rx="4" fill="#c4cedc" opacity="0.62" />
      <text
        x="322"
        y="153"
        fill="#172b4d"
        fontSize="20"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Operations dashboard
      </text>
      <text x="322" y="178" fill="#8491a4" fontSize="11" fontFamily="Inter,Arial,sans-serif">
        One clear view of the work your team runs.
      </text>
      <rect x="322" y="202" width="162" height="95" rx="15" fill="#f3f7fd" />
      <rect x="501" y="202" width="162" height="95" rx="15" fill="#fff6ee" />
      <rect x="680" y="202" width="162" height="95" rx="15" fill="#f3f7fd" />
      <rect x="340" y="221" width="33" height="33" rx="11" fill="#dfebff" />
      <rect x="519" y="221" width="33" height="33" rx="11" fill="#ffe2ca" />
      <rect x="698" y="221" width="33" height="33" rx="11" fill="#dfebff" />
      <rect x="340" y="267" width="107" height="8" rx="4" fill="#aebbd0" />
      <rect x="519" y="267" width="114" height="8" rx="4" fill="#e4ad88" />
      <rect x="698" y="267" width="101" height="8" rx="4" fill="#aebbd0" />
      <rect x="322" y="319" width="520" height="195" rx="17" fill="#fbfcfe" stroke="#e8edf5" />
      <text
        x="345"
        y="352"
        fill="#34435b"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        A workflow your team can follow
      </text>
      <path
        d="M384 421h115m0 0 22-22m-22 22 22 22m-22-22h154m0 0 22-22m-22 22 22 22"
        fill="none"
        stroke="#9bb2d5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="348" y="389" width="77" height="64" rx="14" fill="#fff" stroke="#dfe7f2" />
      <rect x="535" y="389" width="93" height="64" rx="14" fill="#fff" stroke="#dfe7f2" />
      <rect x="697" y="389" width="119" height="64" rx="14" fill="#fff" stroke="#dfe7f2" />
      <circle cx="367" cy="409" r="6" fill="#6591d6" />
      <circle cx="554" cy="409" r="6" fill="#f18c57" />
      <circle cx="716" cy="409" r="6" fill="#73b893" />
      <rect x="361" y="426" width="49" height="6" rx="3" fill="#c2ccda" />
      <rect x="548" y="426" width="64" height="6" rx="3" fill="#c2ccda" />
      <rect x="710" y="426" width="80" height="6" rx="3" fill="#c2ccda" />
    </g>
  );
}

function AppArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="337" y="103" width="292" height="474" rx="44" fill="#172744" />
      <rect x="350" y="117" width="266" height="446" rx="34" fill="#fff" />
      <rect x="420" y="127" width="126" height="17" rx="8.5" fill="#172744" />
      <text
        x="375"
        y="185"
        fill="#192844"
        fontSize="17"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Your workspace
      </text>
      <text x="375" y="207" fill="#8793a7" fontSize="11" fontFamily="Inter,Arial,sans-serif">
        Everything you need, at a glance.
      </text>
      <rect x="375" y="229" width="216" height="112" rx="18" fill={`url(#${id}-accent)`} />
      <text
        x="394"
        y="261"
        fill="#dceaff"
        fontSize="10"
        fontWeight="700"
        letterSpacing="1"
        fontFamily="Inter,Arial,sans-serif"
      >
        PROJECT OVERVIEW
      </text>
      <rect x="394" y="282" width="141" height="10" rx="5" fill="#fff" opacity="0.92" />
      <rect x="394" y="304" width="89" height="8" rx="4" fill="#d9e7ff" opacity="0.82" />
      <rect x="375" y="363" width="100" height="75" rx="14" fill="#f6f8fc" />
      <rect x="491" y="363" width="100" height="75" rx="14" fill="#fff3e8" />
      <circle cx="401" cy="388" r="10" fill="#dce9ff" />
      <circle cx="517" cy="388" r="10" fill="#ffd9bd" />
      <rect x="391" y="411" width="66" height="7" rx="3.5" fill="#b1bfd2" />
      <rect x="507" y="411" width="65" height="7" rx="3.5" fill="#d7a783" />
      <rect x="375" y="456" width="216" height="48" rx="14" fill="#f7f9fc" />
      <circle cx="396" cy="480" r="8" fill="#75b99c" />
      <rect x="414" y="475" width="98" height="8" rx="4" fill="#c2ccda" />
      <rect x="375" y="529" width="216" height="1" fill="#e8edf4" />
      <rect
        x="693"
        y="215"
        width="145"
        height="285"
        rx="25"
        fill="#fff"
        stroke="#e1e8f2"
        strokeWidth="3"
      />
      <rect x="733" y="225" width="65" height="11" rx="5.5" fill="#172744" />
      <rect x="708" y="254" width="115" height="93" rx="14" fill="#ffeadb" />
      <circle cx="765" cy="294" r="21" fill={`url(#${id}-warm)`} />
      <path d="M740 325c7-14 15-19 25-19s19 5 25 19" fill="#f6a270" />
      <rect x="708" y="364" width="84" height="8" rx="4" fill="#63718a" />
      <rect x="708" y="383" width="101" height="7" rx="3.5" fill="#d6dee9" />
      <rect x="708" y="411" width="115" height="29" rx="14.5" fill="#e9f1ff" />
    </g>
  );
}

function AiArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <path
        d="M500 310 308 208m192 102 188-103M500 310l-2 209m0-209 207 116M500 310 300 425"
        stroke="#aec5e8"
        strokeWidth="3"
        strokeDasharray="8 10"
      />
      <circle cx="308" cy="208" r="46" fill="#fff" stroke="#dce8f8" strokeWidth="3" />
      <circle cx="688" cy="207" r="46" fill="#fff" stroke="#f7dfca" strokeWidth="3" />
      <circle cx="300" cy="425" r="46" fill="#fff" stroke="#dce8f8" strokeWidth="3" />
      <circle cx="705" cy="426" r="46" fill="#fff" stroke="#f7dfca" strokeWidth="3" />
      <circle cx="498" cy="520" r="42" fill="#fff" stroke="#dce8f8" strokeWidth="3" />
      <rect x="365" y="158" width="270" height="310" rx="26" fill="#fff" />
      <rect x="393" y="187" width="43" height="43" rx="14" fill={`url(#${id}-accent)`} />
      <path
        d="M414 198v20m-10-10h20m-17-7 14 14m0-14-14 14"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="451"
        y="204"
        fill="#192844"
        fontSize="17"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        AI workflow
      </text>
      <text x="451" y="225" fill="#8793a7" fontSize="11" fontFamily="Inter,Arial,sans-serif">
        Assist · review · approve
      </text>
      <rect x="393" y="253" width="214" height="75" rx="15" fill="#f3f7fd" />
      <text
        x="411"
        y="279"
        fill="#6b7a91"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        DRAFT READY FOR REVIEW
      </text>
      <rect x="411" y="293" width="165" height="7" rx="3.5" fill="#c9d6e8" />
      <rect x="411" y="308" width="131" height="7" rx="3.5" fill="#dde5ef" />
      <rect x="393" y="347" width="214" height="90" rx="15" fill="#fff6ee" />
      <circle cx="417" cy="373" r="8" fill="#f28a57" />
      <text
        x="435"
        y="377"
        fill="#485a73"
        fontSize="12"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Human review stays in control
      </text>
      <rect x="411" y="398" width="155" height="7" rx="3.5" fill="#dfc4b1" />
      <rect x="411" y="414" width="111" height="7" rx="3.5" fill="#ecd9cb" />
      <rect x="454" y="456" width="127" height="34" rx="17" fill={`url(#${id}-warm)`} />
      <text
        x="477"
        y="478"
        fill="#fff"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Review result
      </text>
      <circle cx="308" cy="208" r="10" fill={`url(#${id}-accent)`} />
      <path d="M670 207h36m-18-18v36" stroke="#ed9160" strokeWidth="4" strokeLinecap="round" />
      <rect x="267" y="414" width="66" height="22" rx="11" fill="#edf4ff" />
      <rect x="664" y="416" width="82" height="22" rx="11" fill="#fff0e5" />
    </g>
  );
}

function SocialArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="126" y="130" width="583" height="388" rx="25" fill="#fff" />
      <text
        x="160"
        y="176"
        fill="#192844"
        fontSize="20"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Content calendar
      </text>
      <text x="160" y="200" fill="#8793a7" fontSize="11" fontFamily="Inter,Arial,sans-serif">
        Plan, review and publish with a clear rhythm.
      </text>
      <rect x="159" y="224" width="516" height="46" rx="13" fill="#f4f7fb" />
      <text
        x="183"
        y="252"
        fill="#7e8ca0"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        MON
      </text>
      <text
        x="282"
        y="252"
        fill="#7e8ca0"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        TUE
      </text>
      <text
        x="381"
        y="252"
        fill="#7e8ca0"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        WED
      </text>
      <text
        x="480"
        y="252"
        fill="#7e8ca0"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        THU
      </text>
      <text
        x="579"
        y="252"
        fill="#7e8ca0"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        FRI
      </text>
      <rect x="159" y="285" width="88" height="146" rx="14" fill="#f5f8fd" />
      <rect x="258" y="285" width="88" height="146" rx="14" fill="#fff5eb" />
      <rect x="357" y="285" width="88" height="146" rx="14" fill="#f5f8fd" />
      <rect x="456" y="285" width="88" height="146" rx="14" fill="#fff5eb" />
      <rect x="555" y="285" width="88" height="146" rx="14" fill="#f5f8fd" />
      <rect x="169" y="299" width="68" height="73" rx="10" fill="#d9e8ff" />
      <path d="m176 356 17-20 13 12 12-19 14 27z" fill="#72a0df" />
      <circle cx="220" cy="313" r="6" fill="#ffbd85" />
      <rect x="268" y="299" width="68" height="73" rx="10" fill="#ffdfc7" />
      <circle cx="302" cy="328" r="17" fill="#f19865" />
      <path d="M278 359c6-11 13-16 24-16s18 5 24 16" fill="#f3a97f" />
      <rect x="367" y="299" width="68" height="73" rx="10" fill="#e7e2fb" />
      <rect x="383" y="314" width="36" height="42" rx="8" fill="#9587d8" />
      <circle cx="401" cy="327" r="7" fill="#fff" />
      <rect x="466" y="299" width="68" height="73" rx="10" fill="#e7efff" />
      <path d="M479 354h42v-30h-42z" fill="#719bd4" />
      <path d="m479 330 20 12 22-15" fill="none" stroke="#fff" strokeWidth="3" />
      <rect x="565" y="299" width="68" height="73" rx="10" fill="#ffe8d8" />
      <path d="m576 354 18-19 11 10 16-22v31z" fill="#f4a578" />
      <rect x="171" y="388" width="56" height="7" rx="3.5" fill="#c6d2e3" />
      <rect x="270" y="388" width="51" height="7" rx="3.5" fill="#e4c0a4" />
      <rect x="369" y="388" width="53" height="7" rx="3.5" fill="#c6d2e3" />
      <rect x="752" y="166" width="148" height="326" rx="29" fill="#172744" />
      <rect x="764" y="180" width="124" height="296" rx="21" fill="#fff" />
      <rect x="801" y="188" width="50" height="10" rx="5" fill="#172744" />
      <rect x="778" y="219" width="96" height="110" rx="14" fill={`url(#${id}-accent)`} />
      <circle cx="826" cy="263" r="23" fill="#d6e6ff" opacity="0.9" />
      <path d="M790 315c9-23 19-34 36-34s27 11 36 34" fill="#fff" opacity="0.7" />
      <rect x="778" y="344" width="75" height="8" rx="4" fill="#556781" />
      <rect x="778" y="363" width="91" height="7" rx="3.5" fill="#d7dfea" />
      <rect x="778" y="386" width="91" height="46" rx="12" fill="#fff2e8" />
      <rect x="791" y="401" width="64" height="7" rx="3.5" fill="#ed9463" />
    </g>
  );
}

function EventsArt({ id }: { id: string }) {
  return (
    <g filter={`url(#${id}-shadow)`}>
      <rect x="129" y="108" width="742" height="448" rx="28" fill="#fff" />
      <rect x="153" y="132" width="694" height="400" rx="20" fill="#f8fafc" />
      <text
        x="183"
        y="174"
        fill="#192844"
        fontSize="19"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Event flow & venue plan
      </text>
      <rect x="183" y="195" width="112" height="24" rx="12" fill="#edf4ff" />
      <text
        x="199"
        y="211"
        fill="#4774b5"
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        GUEST ARRIVAL
      </text>
      <rect x="315" y="195" width="101" height="24" rx="12" fill="#fff0e5" />
      <text
        x="334"
        y="211"
        fill="#c35e33"
        fontSize="10"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        RUN OF SHOW
      </text>
      <rect x="183" y="245" width="414" height="253" rx="17" fill="#fff" stroke="#e3e9f1" />
      <rect x="200" y="262" width="379" height="55" rx="13" fill="#172744" />
      <text
        x="220"
        y="295"
        fill="#fff"
        fontSize="13"
        fontWeight="700"
        letterSpacing="1"
        fontFamily="Inter,Arial,sans-serif"
      >
        STAGE · PRESENTATION · HOST
      </text>
      <path d="M390 318v24m-171 0h342" stroke="#c5d1df" strokeWidth="2" strokeDasharray="5 6" />
      <circle cx="260" cy="387" r="34" fill="#e8effa" />
      <circle cx="363" cy="387" r="34" fill="#fff0e5" />
      <circle cx="466" cy="387" r="34" fill="#e8effa" />
      <circle cx="260" cy="387" r="11" fill="#7c9fcf" />
      <circle cx="363" cy="387" r="11" fill="#ee9464" />
      <circle cx="466" cy="387" r="11" fill="#7c9fcf" />
      <circle cx="260" cy="462" r="27" fill="#edf2f8" />
      <circle cx="363" cy="462" r="27" fill="#fff3ea" />
      <circle cx="466" cy="462" r="27" fill="#edf2f8" />
      <path
        d="M525 345h35m-17-17 17 17-17 17"
        fill="none"
        stroke="#f18d59"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="620" y="245" width="202" height="73" rx="15" fill="#fff" stroke="#e5ebf3" />
      <circle cx="649" cy="281" r="14" fill="#eaf1fc" />
      <path d="M645 281h8m-4-4v8" stroke="#5580bd" strokeWidth="2" strokeLinecap="round" />
      <text
        x="676"
        y="276"
        fill="#34435b"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Venue layout
      </text>
      <text x="676" y="296" fill="#8793a7" fontSize="10" fontFamily="Inter,Arial,sans-serif">
        People, room, timing
      </text>
      <rect x="620" y="334" width="202" height="73" rx="15" fill="#fff" stroke="#e5ebf3" />
      <circle cx="649" cy="370" r="14" fill="#fff1e7" />
      <path d="M649 361v9l6 4" fill="none" stroke="#d36c39" strokeWidth="2" strokeLinecap="round" />
      <text
        x="676"
        y="365"
        fill="#34435b"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Run of show
      </text>
      <text x="676" y="385" fill="#8793a7" fontSize="10" fontFamily="Inter,Arial,sans-serif">
        A shared event timeline
      </text>
      <rect x="620" y="423" width="202" height="73" rx="15" fill="#fff" stroke="#e5ebf3" />
      <circle cx="649" cy="459" r="14" fill="#e9f5ef" />
      <path
        d="m643 459 4 4 8-9"
        fill="none"
        stroke="#5ba27b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="676"
        y="454"
        fill="#34435b"
        fontSize="13"
        fontWeight="700"
        fontFamily="Inter,Arial,sans-serif"
      >
        Team coordination
      </text>
      <text x="676" y="474" fill="#8793a7" fontSize="10" fontFamily="Inter,Arial,sans-serif">
        Roles and checkpoints
      </text>
    </g>
  );
}

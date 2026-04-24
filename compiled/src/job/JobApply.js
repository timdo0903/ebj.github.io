"use strict";

function JobApply({
  job
}) {
  const isJp = window.SITE_LANG === 'jp';
  const open = job.status === 'open';
  const applyNum = String((job.sections?.length || 0) + 2).padStart(2, '0');
  return React.createElement("section", {
    className: "job-apply",
    id: "apply"
  }, React.createElement("div", {
    className: "section-label"
  }, React.createElement("span", {
    className: "num"
  }, "\xA7 ", applyNum), React.createElement("span", {
    className: "title"
  }, isJp ? '応募' : 'Apply'), React.createElement("span", {
    className: "spacer"
  })), React.createElement("div", {
    className: "job-apply-grid"
  }, React.createElement("div", null, React.createElement("h2", null, isJp ? open ? React.createElement(React.Fragment, null, "\u5FDC\u52DF\u3092", React.createElement("em", null, "\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002")) : React.createElement(React.Fragment, null, "\u3053\u306E\u8077\u7A2E\u306F", React.createElement("em", null, "\u52DF\u96C6\u7D42\u4E86"), "\u3057\u307E\u3057\u305F\u3002") : open ? React.createElement(React.Fragment, null, "Apply ", React.createElement("em", null, "now"), ".") : React.createElement(React.Fragment, null, "This role is ", React.createElement("em", null, "closed"), ".")), React.createElement("p", null, isJp ? open ? job.formUrl ? '応募フォームから必要事項をご送信ください。書類を確認のうえ、通過された方へ次のステップをご案内します。' : '履歴書・職務経歴書と簡単なメッセージをお送りください。' : React.createElement(React.Fragment, null, "\u3054\u95A2\u5FC3\u3092\u304A\u5BC4\u305B\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002\u73FE\u5728\u3053\u306E\u8077\u7A2E\u306E\u65B0\u898F\u5FDC\u52DF\u306F\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u305B\u3093\u3002\u4ECA\u5F8C\u306E\u52DF\u96C6\u306F\u63A1\u7528\u60C5\u5831\u30DA\u30FC\u30B8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002") : open ? job.formUrl ? 'Submit your information below. Our hiring team will contact shortlisted candidates with next steps.' : 'Send us your CV and a short note. We read every application personally.' : job.plainTitle.toLowerCase().includes('buyer') ? React.createElement(React.Fragment, null, "Thank you for your interest in the Luxury Buyer role. The position has been filled and we are no longer accepting applications. Please follow our ", React.createElement("a", {
    href: "https://www.linkedin.com/company/eco-brand-japan/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--accent)'
    }
  }, "LinkedIn page"), " or the careers page for future updates.") : React.createElement(React.Fragment, null, "Thank you for your enthusiasm about this opportunity. The role has been filled and we are not collecting new submissions. Please keep an eye on the careers page for future roles."))), React.createElement("div", {
    className: "actions"
  }, open && job.formUrl ? React.createElement("a", {
    className: "btn-primary",
    href: job.formUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", null, isJp ? '応募フォームを開く' : 'Open application form'), React.createElement("span", {
    className: "arrow"
  })) : open ? React.createElement("a", {
    className: "btn-primary",
    href: `mailto:careers@ecobrandjapan.com?subject=${encodeURIComponent('Application · ' + job.plainTitle)}`
  }, React.createElement("span", null, isJp ? 'メールで応募する' : 'Email your application'), React.createElement("span", {
    className: "arrow"
  })) : React.createElement("a", {
    className: "btn-primary",
    href: isJp ? '/ja/careers/' : '/careers/'
  }, React.createElement("span", null, isJp ? '採用情報へ戻る' : 'Back to open roles'), React.createElement("span", {
    className: "arrow"
  })), React.createElement("a", {
    className: "btn-ghost",
    href: isJp ? '/ja/careers/' : '/careers/'
  }, "\u2190 ", isJp ? 'すべての職種' : 'All roles'))), open && job.formUrl && React.createElement("div", {
    className: "job-embed"
  }, React.createElement("p", {
    className: "job-embed-fallback"
  }, isJp ? '上のボタンを押すと、応募フォームが新しいタブで開きます。' : 'The application form will open in a new tab when you click the button above.')));
}
Object.assign(window, {
  JobApply
});
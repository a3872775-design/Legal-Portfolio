const legalData = {
    sc: {
        title: "Supreme Court - ASG Chambers [cite: 15]",
        text: "Working under ASG Aishwarya Bhati, I focused on Arbitration law, Criminal law, and Constitutional law[cite: 17, 18]. I assisted in drafting for Public Interest Litigations (PILs) and complex arbitration disputes[cite: 19]."
    },
    pujari: {
        title: "Chambers of Adit Subramaniam Pujari [cite: 11]",
        text: "Involved in researching criminal and civil procedural law[cite: 13]. Observed proceedings at Special Courts and High Courts to gain insight into courtroom nuances and trial management[cite: 14]."
    },
    patna: {
        title: "Patna High Court [cite: 20, 25]",
        text: "Drafted writ petitions, bail applications, and interlocutory applications under the Additional Advocate General[cite: 22, 23]. Handled cases related to consumer law for IRCTC[cite: 30]."
    },
    fiscal: {
        title: "Fiscal Federalism Research [cite: 50]",
        text: "My paper 'Fiscal Federalism from Pyramid to Matrix' analyzes the Supreme Court judgement in Mineral Area Development Authority v. Steel Authority of India[cite: 50]. Published in Shimla Law Review[cite: 51]."
    },
    sanskrit: {
        title: "Sanskrit & Indigenous Law [cite: 53]",
        text: "Completed a certificate course exploring how the Sanskrit language serves as a gateway to understanding the Indigenous legal traditions of India[cite: 53]."
    },
    feminism: {
        title: "Feminism & War Zones [cite: 44]",
        text: "Research project focusing on intersectionality, specifically addressing the rights and legal protections for Afghan women in war-torn regions[cite: 44]."
    }
};

function openPopup(key) {
    const info = legalData[key];
    const overlay = document.getElementById('popup-overlay');
    const inner = document.getElementById('popup-inner');

    inner.innerHTML = `
        <h2 style="margin-bottom: 20px;">${info.title}</h2>
        <div style="width: 50px; height: 3px; background: #b5892d; margin-bottom: 20px;"></div>
        <p style="font-size: 1.1rem; line-height: 1.8; color: #475569;">${info.text}</p>
    `;
    
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// Simple form alert
document.getElementById('portfolio-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you, Arya. Your message has been sent successfully!");
    this.reset();
});
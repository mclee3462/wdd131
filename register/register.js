document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const addParticipantButton = document.getElementById('addParticipant');
    const participantsFieldset = document.getElementById('participants');
    const registrationForm = document.getElementById('registrationForm');
    const summaryDiv = document.getElementById('summary');

    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const totalFees = calculateTotalFees();
        const adultName = document.getElementById('adultName').value;
        registrationForm.classList.add('hide');
        summaryDiv.classList.remove('hide');
        summaryDiv.innerHTML = successTemplate({
            name: adultName,
            participants: participantCount,
            fees: totalFees
        });
    });

    function participantTemplate(count) {
        return `
            <section class="participant" id="participant${count}">
                <h2>Participant ${count}</h2>
                <label for="firstName${count}">First Name *</label>
                <input type="text" id="firstName${count}" name="firstName${count}" required>

                <label for="activity${count}">Activity # *</label>
                <input type="text" id="activity${count}" name="activity${count}" required>

                <label for="fee${count}">Fee ($) *</label>
                <input type="number" id="fee${count}" name="fee${count}" min="0" required>

                <label for="date${count}">Desired Date *</label>
                <input type="date" id="date${count}" name="date${count}" required>

                <label for="grade${count}">Grade</label>
                <input type="text" id="grade${count}" name="grade${count}">
            </section>
        `;
    }

    function calculateTotalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeInput) => total + Number(feeInput.value || 0), 0);
    }

    function successTemplate(info) {
        return `
            <h2>Thank you, ${info.name}, for registering!</h2>
            <p>You have registered ${info.participants} participant(s) and owe $${info.fees} in fees.</p>
        `;
    }
});

function createRow(phone, index) {
  return `
        <tr>
            <td>${index}.</td>
            <td>${phone.name}</td>
            <td>${phone.price}$</td>
            <td>${phone.status}</td>
            <td>${phone.description}</td>
            <td>${phone.createdAt}</td>
            <td>${phone.updatedAt}</td>
            <td data-id = ${phone.id}>
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-regular fa-trash-can"></i>
            </td>
        </tr>
    `;
}

function validate(name, price) {
  // if (name.value.trim().length <= 3) {
  //     alert("Nomi bunchlik bo'lmaydi");
  //     name.focus();
  //     return false
  // }

  // if (!price.value) {
  //     alert('Narx kiritishi shart ');
  //     price.focus();
  //     return false
  // }

  // if (price.value < 0) {
  //     alert(`0 dan katta bo'lishi kerak`)
  //     price.focus();
  //     return false
  // }

  return true;
}

export { createRow, validate };

let form = document.forms[0];

        const btn = document.querySelector("button").addEventListener("click", () => {

            let name = form.name.value;
            let lastName = form.lastName.value;
            let age = form.age.value;
            let position = form.position.value;

            let userInfo = new WeakSet();
            userInfo.add({
                name,
                lastName,
                age,
                position,
            });

            let table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>${name}</th>
                    <th>${lastName}</th>
                    <th>${age}</th>
                    <th>${position}</th>
                </tr>
            `;

            document.body.append(table);
        });
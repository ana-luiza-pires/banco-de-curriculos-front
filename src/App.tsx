import React, { useState } from 'react'
import './App.css'
import getFromAPI from './utils/requests'

function App() {
  const [name, setName] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [birth, setBirth] = useState<string>('')
  const [maritalstatus, setMaritalstatus] = useState<string>('Não selecionado')
  const [gender, setGender] = useState<string>('Não selecionado')
  const [adress, setAdress] = useState<string>('')
  const [neighborhood, setNeighborhood] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [zipcode, setZipcode] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [cellphone, setCellphone] = useState<string>('')
  const [linkedin, setLinkedin] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [RG, setRG] = useState<string>('')
  const [CPF, setCPF] = useState<string>('')
  const [vehicle, setVehicle] = useState<string>('Não selecionado')
  const [CNH, setCNH] = useState<string>('Não selecionado')

  async function Salvar() {
    const curriculo = {
      name,
      role,
      birth,
      maritalstatus,
      gender,
      adress,
      neighborhood,
      city,
      zipcode,
      phone,
      cellphone,
      linkedin,
      email,
      RG,
      CPF,
      vehicle,
      CNH
    }
    console.log(curriculo);
    await getFromAPI.post("/", curriculo);
  }

  return (<>
    <div>
      <h1 className="title"> DADOS PESSOAIS</h1>
      <div>
        <label htmlFor="name">Nome completo</label>
        <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="role">Cargo pretendido</label>
        <input onChange={(e) => setRole(e.target.value)} type="text" id="role" name="role" />
      </div>

      <div>
        <label htmlFor="birth">Data de nascimento</label>
        <input onChange={(e) => setBirth(e.target.value)} type="date" id="birth" name="birth" />
      </div>

      <div>
        <label htmlFor="maritalStatus">Estado Civil</label>
        <select value={maritalstatus} onChange={(e: any) => setMaritalstatus(e.target.value)} name="maritalStatus" id="maritalStatus">
          <option value="Casado(a)">Casado(a)</option>
          <option value="Solteiro(a)">Solteiro(a)</option>
        </select>
      </div>

      <div>
        <label htmlFor="gender">Sexo</label>
        <select onChange={(e: any) => setGender(e.target.value)} name="gender" id="gender">
          <option value="F">F</option>
          <option value="M">M</option>
          <option selected value="-">Nenhum</option>
        </select>
      </div>

      <div>
        <label htmlFor="address">Endereço</label>
        <input onChange={(e) => setAdress(e.target.value)} placeholder="Rua Melo de Carmelo, 56, Bloco 2, AP 101" type="address" id="address" name="address" />
      </div>

      <div>
        <label htmlFor="neighborhood">Bairro</label>
        <input onChange={(e) => setNeighborhood(e.target.value)} type="text" id="neighborhood" name="neighborhood" />
      </div>

      <div>
        <label htmlFor="city">Cidade</label>
        <input onChange={(e) => setCity(e.target.value)} type="text" id="city" name="city" />
      </div>

      <div>
        <label htmlFor="zipcode">CEP</label>
        <input onChange={(e) => setZipcode(e.target.value)} type="zipcode" id="zipcode" name="zipcode" />
      </div>

      <div>
        <label htmlFor="phone">Telefone Fixo</label>
        <input onChange={(e) => setPhone(e.target.value)} type="phone" id="phone" name="phone" />
      </div>

      <div>
        <label htmlFor="cellphone">Celular</label>
        <input onChange={(e) => setCellphone(e.target.value)} type="cellphone" id="cellphone" name="cellphone" />
      </div>

      <div>
        <label htmlFor="linkedin">Linkedin</label>
        <input onChange={(e) => setLinkedin(e.target.value)} type="linkedin" id="linkedin" name="linkedin" />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
      </div>

      <h1 className="title"> DOCUMENTOS </h1>

      <div>
        <label htmlFor="RG">Identidade</label>
        <input onChange={(e) => setRG(e.target.value)} type="RG" id="RG" name="RG" />
      </div>

      <div>
        <label htmlFor="CPF">CPF</label>
        <input onChange={(e) => setCPF(e.target.value)} type="CPF" id="CPF" name="CPF" />
      </div>

      <div>
        <label htmlFor="vehicle">Possui veículo</label>
        <select onChange={(e: any) => setVehicle(e.target.value)} name="vehicle" id="vehicle">
          <option selected value="Y">S</option>
          <option value="N">N</option>
        </select>
      </div>

      <div>
        <label htmlFor="CNH">Habilitação</label>
        <select onChange={(e: any) => setCNH(e.target.value)} name="CNH" id="CNH">
          <option selected value="Possui">Possui</option>
          <option value="Não possui">Não possui</option>
        </select>
      </div>

      <button onClick={Salvar}>
        Salvar
      </button>
    </div>
  </>)
}

export default App;

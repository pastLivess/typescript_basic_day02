class Person {}
interface ICTORPerson {
  new (): Person
}

function factory(fn: ICTORPerson) {
  return new fn()
}
factory(Person)

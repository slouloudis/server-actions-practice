export function ActionButton({action, children}) {

    console.log(action)
    return (
        <form action={action}>
            <button>
            {children}
        </button>
        </form>
    )
}
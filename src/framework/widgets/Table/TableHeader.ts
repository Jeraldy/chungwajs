import Header from "../../core/Header"
import H1 from "../../core/H1"
import TextView from "../../core/TextView"
import Span from "../../core/Span"
import Search from "./Search"
import Row from "../../layouts/Row"

export default (props: any) => {
    const actions = props.actions
    delete props.actions
    return Header({
        class: "main-table-header",
        children: [
            H1({
                class: "table-header--title",
                children: [
                    TextView("Nutrition")
                ]
            }),
            Span({
                class: "table-header--icons",
                children: [
                    Row({
                        children: [
                            Search(props),
                            ...actions
                        ]
                    })
                ]
            })
        ]
    })
}
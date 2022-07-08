<script>
    import VejlederCard from '../components/VejlederCard.svelte'
    import { Vejleder } from '../Entities/Vejleder'
    const vejlederArray = [
        new Vejleder("Jimmy", "https://scontent-cph2-1.xx.fbcdn.net/v/t1.18169-9/12717359_10154048257338629_3084668126806839716_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6ehQoGSgM2oAX_8bg6W&tn=1NywvpUc4lEQ2BdW&_nc_ht=scontent-cph2-1.xx&oh=00_AT-wRQzqv90m5WVLKxrwsjmhDLAhS2FcH9njsnz6oX3spQ&oe=62EBF5E5", "Datamatiker", 5, "Yayeet"),
        new Vejleder("Frederik", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70CwB1pm8I1w_HKY_w3MIMbCd7kQuFD9QZw&usqp=CAU", "Datamatiker", 5, "LP???")
    ]
    
</script>
<div id="games-table-wrapper">
{#each vejlederArray as vejleder}
    <VejlederCard vejlederInfo={vejleder}/>
{/each}
</div>

<style>
    #games-table-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 80vw;
        }
</style>
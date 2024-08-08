-- command to go to another player
RegisterCommand('goto', function(_, args)
    local targetId = args[1]

    if not targetId then
        TriggerEvent('chat:addMessage', {
            args = { 'Please provide a target ID', },
        })

        return
    end

    TriggerServerEvent('b_teleporter:goto', targetId)
end)

-- comand to bring a player to us
RegisterCommand('summon', function(_, args)
    local targetId = args[1]

    if not targetId then
        TriggerEvent('chat:addMessage', {
            args = { 'Please provide a target ID.', },
        })

        return
    end

    TriggerServerEvent('b_teleporter:summon', targetId)
end)

-- an envent that teleport us to a specific location
RegisterNetEvent('b_teleporter:teleport', function(targetCoordinates)
    local playerPed = PlayerPedId()

    SetEntityCoords(playerPed, targetCoordinates)
end)


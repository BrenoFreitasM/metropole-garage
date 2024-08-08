RegisterNetEvent('b_teleporter:goto', function(targetId)
    local playerId = source

    -- Get entity handle of target 
    local targetPed = GetPlayerPed(targetId)

    if targetPed <= 0 then
        TriggerClientEvent('chat:addMessage', playerId, {
            args = { 'Desculpe, ' .. targetId .. 'não existe.', },
        })

        return
    end

    -- Get cordinates of the client
    local targetPos = GetEntityCoords(targetPed)

    -- send the cordinates to the client so it can go to the target
    TriggerClientEvent('b_teleporter:teleport', playerId, targetPos)
end)

RegisterNetEvent('b_teleporter:summon', function(targetId)
    local playerId = source
    local playerPed = GetplayerPed(playerId)
    local playerPos = GetEntityCoords(playerPed)

    TriggerClientEvent('b_teleporter:teleport', targetId, playerPos)

end)
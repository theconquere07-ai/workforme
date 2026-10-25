"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTopics = listTopics;
exports.createTopic = createTopic;
exports.updateTopic = updateTopic;
exports.deleteTopic = deleteTopic;
exports.upsertSection = upsertSection;
exports.deleteSection = deleteSection;
const supabase_1 = require("../services/supabase");
async function listTopics(req, res) {
    const { data: topics, error } = await supabase_1.supabase
        .from('analyzer_topics')
        .select('*, analyzer_sections(*)')
        .eq('user_id', req.user.id)
        .order('created_at', { ascending: false });
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(topics);
}
async function createTopic(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('analyzer_topics')
        .insert({ title: req.body.title || 'Untitled', user_id: req.user.id })
        .select()
        .single();
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(201).json({ ...data, analyzer_sections: [] });
}
async function updateTopic(req, res) {
    const { data, error } = await supabase_1.supabase
        .from('analyzer_topics')
        .update({ title: req.body.title, updated_at: new Date().toISOString() })
        .eq('id', req.params.id)
        .eq('user_id', req.user.id)
        .select()
        .single();
    if (error || !data) {
        res.status(404).json({ error: error?.message || 'Topic not found' });
        return;
    }
    res.json(data);
}
async function deleteTopic(req, res) {
    const { error } = await supabase_1.supabase
        .from('analyzer_topics')
        .delete()
        .eq('id', req.params.id)
        .eq('user_id', req.user.id);
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(204).send();
}
async function upsertSection(req, res) {
    const { topicId, sectionKey } = req.params;
    const { content, sort_order } = req.body;
    const { data, error } = await supabase_1.supabase
        .from('analyzer_sections')
        .upsert({
        topic_id: topicId,
        user_id: req.user.id,
        section_key: sectionKey,
        content: content ?? '',
        sort_order: sort_order ?? 0,
    }, { onConflict: 'topic_id,section_key' })
        .select()
        .single();
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.json(data);
}
async function deleteSection(req, res) {
    const { topicId, sectionKey } = req.params;
    const { error } = await supabase_1.supabase
        .from('analyzer_sections')
        .delete()
        .eq('topic_id', topicId)
        .eq('section_key', sectionKey)
        .eq('user_id', req.user.id);
    if (error) {
        res.status(500).json({ error: error.message });
        return;
    }
    res.status(204).send();
}
